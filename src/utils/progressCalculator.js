export const calculatePercentage = (done, total) => {
  if (!total || total === 0) return 0;   // 👈 HARD SAFETY
  if (!done) return 0;
  return Math.round((done / total) * 100);
};


export const calculateDashboardMetrics = (activity) => {
  const dsa = calculatePercentage(activity.dsa.solved, activity.dsa.total);
  const certifications = calculatePercentage(
    activity.certifications.completed,
    activity.certifications.total
  );
  const jobPrep = calculatePercentage(
    activity.jobPrep.roadmapsCompleted,
    activity.jobPrep.totalRoadmaps
  );
  const companyPrep = calculatePercentage(
    activity.companyPrep.companiesPrepared,
    activity.companyPrep.totalCompanies
  );
  const resume = calculatePercentage(
    activity.resume.sectionsCompleted,
    activity.resume.totalSections
  );

  const overall =
    Math.round((dsa + certifications + jobPrep + companyPrep + resume) / 5);

  return {
    dsa,
    certifications,
    jobPrep,
    companyPrep,
    resume,
    overall,
  };
};
