"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bookmark, Share2, ArrowRight, Clock, MapPin, Building2, Briefcase } from 'lucide-react';
import Image from 'next/image';

// Get company initials
const getCompanyInitials = (company: string): string => {
  return company
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  benefits: string[];
  logo?: string;
}

interface JobListingProps {
  job: Job;
  isSelected: boolean;
  onSelect: (job: Job) => void;
  onSave?: (job: Job) => void;
  onShare?: (job: Job) => void;
}

export function JobListing({ job, isSelected, onSelect, onSave, onShare }: JobListingProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.01 }}
      className={`${
        isSelected ? 'border-purple-500' : 'border-gray-200'
      } cursor-pointer transition-all duration-200 ${
        window.innerWidth >= 1024 
          ? 'bg-white rounded-lg p-6 shadow-sm border' 
          : 'p-4 border-b border-gray-100'
      }`}
      onClick={() => onSelect(job)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
              {getCompanyInitials(job.company)}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
              <p className="text-slate-600">{job.company}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{job.posted}</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-slate-900 font-medium">{job.salary}</p>
          </div>

          <AnimatePresence>
            {showDescription && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-4 text-slate-600"
              >
                <p className="line-clamp-3">{job.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col gap-2">
          {onSave && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                onSave(job);
              }}
              className="p-2 text-slate-400 hover:text-purple-600 transition-colors"
            >
              <Bookmark className="w-5 h-5" />
            </motion.button>
          )}
          {onShare && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                onShare(job);
              }}
              className="p-2 text-slate-400 hover:text-purple-600 transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
          )}
        </div>
      </div>

      <motion.button
        whileHover={{ x: 5 }}
        onClick={(e) => {
          e.stopPropagation();
          setShowDescription(!showDescription);
        }}
        className="mt-4 flex items-center gap-1 text-purple-600 hover:text-purple-700"
      >
        {showDescription ? 'Show Less' : 'Read More'}
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
} 