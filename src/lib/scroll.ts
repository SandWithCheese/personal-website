/**
 * Scrolls the page smoothly to the section with the specified ID, with an offset from the top.
 *
 * @param {string} id - The ID of the section to scroll to.
 * @param {number} offset - The offset from the top of the section to scroll to.
 */
function scrollToSection(id: string, offset: number) {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

export default scrollToSection;
