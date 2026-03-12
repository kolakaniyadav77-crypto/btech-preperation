// Contest Participation data and helpers
// Contains coding contest links along with optional deadlines and a replacement URL
// that should be used when the original site moves or a contest ends.

export const contestPlatforms = [
  {
    id: 1,
    name: 'LeetCode Weekly Contests',
    url: 'https://leetcode.com/contest/',
    description: 'LeetCode weekly algorithmic contests',
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // placeholder: 1 week
    // example replacement once the contest finishes
    replacementUrl: 'https://leetcode.com/contest/weekly-contest-etc'
  },
  {
    id: 2,
    name: 'CodeChef Long Challenge',
    url: 'https://www.codechef.com/contests',
    description: 'Monthly 10-day contest from CodeChef',
    deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  },
  {
    id: 3,
    name: 'HackerRank Weekly Contests',
    url: 'https://www.hackerrank.com/contests',
    description: 'Regular coding competitions on HackerRank',
    deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  },
  {
    id: 4,
    name: 'Codeforces Rounds',
    url: 'https://codeforces.com/contests',
    description: 'All upcoming Codeforces rounds (Div. 1 + 2)',
    deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  },
  {
    id: 5,
    name: 'TopCoder SRM',
    url: 'https://www.topcoder.com/challenges?track=Algorithm',
    description: 'Single round matches on Topcoder',
    deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
  },
  {
    id: 6,
    name: 'Google Kick Start',
    url: 'https://codingcompetitions.withgoogle.com/kickstart',
    description: 'Online rounds for Kick Start contest',
    deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
  },
  {
    id: 7,
    name: 'Codeforces Practice Contests',
    url: 'https://codeforces.com/contests',
    description: 'Link to all current Codeforces rounds and practice',
    deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  }
];

// Returns items which are still before their deadline or have a replacementUrl
export const getActiveContests = () => {
  const now = new Date();
  return contestPlatforms.filter(c => c.deadline > now || c.replacementUrl);
};

// Returns display url for an entry (use replacement if deadline passed)
export const getContestLink = (contest) => {
  const now = new Date();
  if (contest.deadline <= now && contest.replacementUrl) {
    return contest.replacementUrl;
  }
  return contest.url;
};

// allow updating a contest link in-memory (e.g. after old contest expires)
export const updateContestUrl = (id, newUrl) => {
  const idx = contestPlatforms.findIndex(c => c.id === id);
  if (idx !== -1) contestPlatforms[idx].replacementUrl = newUrl;
};
