// Function to format date
export function formatDate(dateString: string) {
  // Implement date formatting logic here (e.g., using moment.js or Date object methods)
  return dateString;
}

function extractYear(dateString: string) {
 /*
  Extracts the year from a date string in YYYY-MM-DD format.

  Args:
      dateString: The date string to extract the year from.

  Returns:
      The year as an integer, or None if the string is not in the expected format.
  */
  try {
    // Split the string using '-' as delimiter
    const parts = dateString.split('-');
    // Check if there are exactly 3 parts
    if (parts.length === 3) {
      // Return the first element (year) as an integer
      return parseInt(parts[0], 10);
    } else {
      return null;
    }
  } catch (error) {
    // Handle potential conversion errors
    return null;
  }
}

function roundToDecimal(number: number) {
 /*
  Rounds a number to one decimal place and returns it.
  Args:
      number: The number to round.
  Returns:
      A string representation of the number rounded to one decimal place.
  */

  // Use toFixed() to set the number of decimal places
  const roundedNumber = number.toFixed(1);
  // Return the rounded number as a string
  return parseInt(roundedNumber);
}

export {extractYear, roundToDecimal}