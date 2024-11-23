"use client"

import React, { useState } from 'react';
import { Star } from 'lucide-react';

const RecipeRatingSystem = () => {
  const [ratings, setRatings] = useState([]);
  const [newRating, setNewRating] = useState({
    name: '',
    taste: 0,
    difficulty: 0,
    presentation: 0,
    creativity: 0,
    comments: ''
  });

  const categories = {
    taste: 'Smaak',
    difficulty: 'Moeilijkheidsgraad',
    presentation: 'Presentatie',
    creativity: 'Creativiteit'
  };

  const handleStarClick = (category, value) => {
    setNewRating(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleSubmit = () => {
    if (!newRating.name) {
      alert('Vergeet niet je naam in te vullen!');
      return;
    }
    
    const totalScore = (
      newRating.taste + 
      newRating.difficulty + 
      newRating.presentation + 
      newRating.creativity
    ) / 4;

    setRatings([...ratings, {...newRating, totalScore}]);
    setNewRating({
      name: '',
      taste: 0,
      difficulty: 0,
      presentation: 0,
      creativity: 0,
      comments: ''
    });
  };

  const StarRating = ({ value, onChange, disabled }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-6 h-6 cursor-pointer transition-colors ${
              star <= value ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            } ${disabled ? '' : 'hover:text-yellow-400'}`}
            onClick={() => !disabled && onChange(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-8 bg-white shadow-lg rounded-lg">
          <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-4 rounded-t-lg">
            <h1 className="text-2xl text-orange-800">Recept van de Maand: Arayes</h1>
          </div>
          <div className="space-y-6 p-6">
            {/* Input sectie */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Je naam"
                value={newRating.name}
                onChange={(e) => setNewRating(prev => ({...prev, name: e.target.value}))}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition"
              />
              
              {Object.entries(categories).map(([category,
