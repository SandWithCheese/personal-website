"use client";

import CardProject from "@/components/card-project";
import { ClientPagination } from "@/components/client-pagination";
import { isPageValid } from "@/lib/validate-pagination";
import { Project } from "@/types/Project";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function ProjectsPagination({ projects }: { projects: Project[] }) {
  // Router
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page"); // Pagination state

  // Pagination
  const totalPerPage = 6;
  const startIdx = (parseInt(page ?? "1") - 1) * totalPerPage; // Include start index
  const endIdx = startIdx + totalPerPage; // Exclude end index
  const total = projects.length ?? 0;

  useEffect(() => {
    // New search params
    const newSearchParams = new URLSearchParams(searchParams);

    // Validate page
    if (!isPageValid(page, total, totalPerPage)) {
      newSearchParams.set("page", "1");
    }

    router.replace(`/projects?${newSearchParams.toString()}`);
  }, [page, router, searchParams, total]);

  return (
    <>
      <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-12 sm:place-items-start sm:items-stretch">
        {projects &&
          projects
            .slice(startIdx, endIdx)
            .map((project: Project) => (
              <CardProject project={project} key={project._id} />
            ))}
      </div>

      <div className="flex grow flex-col justify-end">
        <ClientPagination total={total} totalPerPage={totalPerPage} />
      </div>
    </>
  );
}

export default ProjectsPagination;
