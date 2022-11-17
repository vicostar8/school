export function getBreadcrumbsForTeacher(pathname) {
  const breadcrumbs = pathname.split("/").filter((it) => it !== "");
  const path = breadcrumbs[0][0].toUpperCase() + breadcrumbs[0].substring(1);
  return path;
}
