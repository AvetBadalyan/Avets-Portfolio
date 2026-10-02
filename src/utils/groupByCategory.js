/**
 * Ordered list of portfolio categories.
 * The output of groupByCategory follows this sequence.
 */
export const CATEGORY_ORDER = ['Shopify', 'Full Stack', 'MERN', 'React.JS', 'Pure JS'];

/**
 * Groups an array of projects by their `category` field.
 *
 * @param {Array<{category: string, [key: string]: any}>} projects
 * @returns {Array<{category: string, projects: Array}>}
 *   Categories returned in CATEGORY_ORDER; empty categories are excluded;
 *   project order within each group is preserved.
 */
export function groupByCategory(projects) {
  if (!Array.isArray(projects) || projects.length === 0) {
    return [];
  }

  // Bucket projects by category, preserving insertion order
  const buckets = {};
  for (const project of projects) {
    const cat = project.category;
    if (!buckets[cat]) {
      buckets[cat] = [];
    }
    buckets[cat].push(project);
  }

  // Emit groups in the canonical order, skipping empty categories
  const grouped = [];
  for (const category of CATEGORY_ORDER) {
    if (buckets[category] && buckets[category].length > 0) {
      grouped.push({ category, projects: buckets[category] });
    }
  }

  return grouped;
}

export default groupByCategory;
