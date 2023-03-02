/**
 * Helper function to combine class names with `Tailwind CSS`
 *
 * @param {...string} classes - List of class names to be combined
 * @returns {string} A string of combined class names
 */
export default function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * `WARNING`: This function is not recommended, use `cn()` instead.
 *
 * Helper function to combine class names
 *
 * @param {...string} classes - List of class names to be combined
 *@returns {string} A string of combined class names, or an `empty string` if no class names are provided
 */
export function cn2(...classes: string[]):string {
  return classes.join(" ").trim();
}
