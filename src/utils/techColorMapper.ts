/**
 * Maps technology names to their corresponding color classes
 * Used for styling technology badges in project cards
 */
export const getTechColor = (tech: string): string => {
  const techLower = tech.toLowerCase();

  // Frameworks & Libraries - Special Colors
  if (
    techLower.includes("node") ||
    techLower.includes("mongodb") ||
    techLower.includes("mysql")
  )
    return "green";
  // --------------------------------------------------

  if (
    techLower.includes("angular") ||
    techLower.includes("figma") ||
    techLower.includes("socket")
  )
    return "red";
  // ---------------------------------------------------
  if (
    techLower.includes("react") ||
    techLower.includes("vue") ||
    techLower.includes("typescript")
  )
    return "blue";
  // ---------------------------------------------------
  if (
    techLower.includes("bootstrap") ||
    techLower.includes("tailwind") ||
    techLower.includes("sass") ||
    techLower.includes("scss")
  )
    return "purple";
  // ---------------------------------------------------
  if (
    techLower.includes("firebase") ||
    techLower.includes("supabase") ||
    techLower.includes("express") ||
    techLower.includes("rag")
  )
    return "yellow";
  // ---------------------------------------------------
  if (techLower.includes("redux") || techLower.includes("context"))
    return "purple";
  // ---------------------------------------------------
  if (techLower.includes("next") || techLower.includes("vite")) return "cyan";

  // Default for basic languages (HTML, CSS, JavaScript)
  return "default";
};
