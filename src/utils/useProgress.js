// useProgress Hook - Hook to update progress when user visits a section
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import progressTracker from './progressTracker';

export const useProgress = (sectionName) => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser?.id && sectionName) {
      // Increment progress by 10% when user visits the section
      progressTracker.incrementSectionProgress(currentUser.id, sectionName, 10);
    }
  }, [sectionName, currentUser?.id]);

  const updateProgress = (value) => {
    if (currentUser?.id && sectionName) {
      progressTracker.updateSectionProgress(currentUser.id, sectionName, value);
    }
  };

  const getSectionProgress = () => {
    if (!currentUser?.id) return 0;
    const progress = progressTracker.getUserProgress(currentUser.id);
    return progress?.sections[sectionName] || 0;
  };

  return {
    updateProgress,
    getSectionProgress
  };
};

export default useProgress;
