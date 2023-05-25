export function getGrade(score: any) {
  if (score < 200) {
    return "bg-red-400";
  } else if (score < 400) {
    return "bg-orange-400";
  } else if (score < 600) {
    return "bg-yellow-400";
  } else if (score < 800) {
    return "bg-gradient-to-r from-emerald-600 via-green-500 to-lime-600";
  } else if (score < 1000) {
    return "bg-gradient-to-r from-cyan-600 via-blue-500 to-sky-600";
  } else if (score < 1500) {
    return "bg-gradient-to-r from-purple-600 via-blue-500 to-violet-600";
  } else {
    return "bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400";
  }
}

export function getGradeName(score: any) {
  if (score < 200) {
    return "Bronze";
  } else if (score < 400) {
    return "Silver";
  } else if (score < 600) {
    return "Gold";
  } else if (score < 800) {
    return "Platinum";
  } else if (score < 1000) {
    return "Diamond";
  } else if (score < 1500) {
    return "Master";
  } else {
    return "Challenger";
  }
}
