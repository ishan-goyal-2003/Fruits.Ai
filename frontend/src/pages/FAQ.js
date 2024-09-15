import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FAQ.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/faqs'); // Add your backend URL
      setFaqs(response.data);
    } catch (err) {
      setError('Error fetching FAQs');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question || !answer) {
      setError('Both fields are required.');
      return;
    }
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/faqs/${editingId}`, { question, answer });
      } else {
        await axios.post('http://localhost:5000/faqs', { question, answer });
      }
      resetForm();
      fetchFAQs();
    } catch (err) {
      setError('Error saving FAQ');
    }
  };

  const resetForm = () => {
    setQuestion('');
    setAnswer('');
    setEditingId(null);
    setError('');
  };

  const handleEdit = (faq) => {
    setQuestion(faq.question);
    setAnswer(faq.answer);
    setEditingId(faq._id); // Use _id for MongoDB
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      try {
        await axios.delete(`http://localhost:5000/faqs/${id}`);
        fetchFAQs();
      } catch (err) {
        setError('Error deleting FAQ');
      }
    }
  };

  return (
    <div>
      <h1>FAQs</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Loading FAQs...</p>}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Question"
          required
        />
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Answer"
          required
        ></textarea>
        <button type="submit">{editingId ? 'Update' : 'Add'} FAQ</button>
      </form>
      </div>
      <ul>
        {faqs.map((faq) => (
          <li key={faq._id}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            <button onClick={() => handleEdit(faq)}>Edit</button>
            <button onClick={() => handleDelete(faq._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
