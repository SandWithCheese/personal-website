/**
 * Validates whether a given page number is within the valid range.
 *
 * @param {string | null} page - The page number to validate, as a string or null.
 * @param {number} total - The total number of items.
 * @param {number} totalPerPage - The number of items per page.
 * @returns {boolean} True if the page number is valid, false otherwise.
 */
export function isPageValid(
  page: string | null,
  total: number,
  totalPerPage: number,
): boolean {
  // Check if page exists
  if (!page) return false;

  // Check if page is a number
  if (isNaN(parseInt(page))) return false;

  // Check if page is greater than 0
  if (parseInt(page) <= 0) return false;

  // Check if page is less than or equal to the last page
  if (parseInt(page) > Math.ceil(total / totalPerPage)) return false;

  return true;
}
