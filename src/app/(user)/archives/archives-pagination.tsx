"use client";

import Archives from "@/components/archives";
import { ClientPagination } from "@/components/client-pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { isPageValid } from "@/lib/validate-pagination";
import { Archive } from "@/types/Archive";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function ArchivesPagination({ archives }: { archives: Archive[] }) {
  // Router
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page"); // Pagination state

  // Pagination
  const totalPerPage = 6;
  const startIdx = (parseInt(page ?? "1") - 1) * totalPerPage; // Include start index
  const endIdx = startIdx + totalPerPage; // Exclude end index
  const total = archives.length ?? 0;

  useEffect(() => {
    // New search params
    const newSearchParams = new URLSearchParams(searchParams);

    // Validate page
    if (!isPageValid(page, total, totalPerPage)) {
      newSearchParams.set("page", "1");
    }

    router.replace(`/archives?${newSearchParams.toString()}`);
  }, [page, router, searchParams, total]);

  return (
    <Suspense fallback={<Skeleton />}>
      <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-12 sm:place-items-start sm:items-stretch">
        {archives &&
          archives.map((archive: Archive) => (
            <Archives key={archive._id} archive={archive} />
          ))}
      </div>

      <div className="flex grow flex-col justify-end">
        <ClientPagination total={total} totalPerPage={totalPerPage} />
      </div>
    </Suspense>
  );
}

export default ArchivesPagination;
