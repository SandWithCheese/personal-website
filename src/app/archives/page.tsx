import Archives from "@/components/Archives"
import { Archive } from "../../../types/Archive"
import { getArchives } from "../../../sanity/sanity-utils"
import { Skeleton } from "@/components/ui/skeleton"
import { Metadata, Viewport } from "next"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Archives | Sandwicheese",
  description:
    "Hi! I'm Naufal, a software engineer and CTF enthusiast. Committed to mastering both domains, I focus on developing secure software and conquering CTF challenges. Seeking to gain more experience and knowledge to make a positive impact in these fields. Ready to connect and collaborate with fellow enthusiasts.",
  generator: "Next.js",
  applicationName: "Sandwicheese",
  keywords: [
    "Ahmad Naufal Ramadan",
    "Sandwicheese",
    "Archives",
    "Personal Website",
    "Teknik Informatika",
    "Institut Teknologi Bandung",
    "ITB",
  ],
  verification: {
    google: "fv_CNbFwrtMZ1V0Z2RV4p3t48ULjscLJ97A_P08DT8E",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  openGraph: {
    title: "Sandwicheese",
    description:
      "I'm Naufal, a software engineer and CTF enthusiast. Committed to mastering both domains, I focus on developing secure software and conquering CTF challenges. Seeking to gain more experience and knowledge to make a positive impact in these fields. Ready to connect and collaborate with fellow enthusiasts.",
    url: "https://sandwicheese.vercel.app/",
    siteName: "Sandwicheese",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://sandwicheese.vercel.app/opengraph-image.png",
        width: 512,
        height: 512,
        alt: "Sandwicheese",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandwicheese",
    description:
      "I'm Naufal, a software engineer and CTF enthusiast. Committed to mastering both domains, I focus on developing secure software and conquering CTF challenges. Seeking to gain more experience and knowledge to make a positive impact in these fields. Ready to connect and collaborate with fellow enthusiasts.",
    images: [
      {
        url: "https://sandwicheese.vercel.app/twitter-image.png",
        width: 512,
        height: 512,
        alt: "Sandwicheese",
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#271971",
}

async function page() {
  const archives = await getArchives()

  if (archives === null) {
    return <Skeleton />
  }

  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-medium text-center sm:text-start">Archives</h2>
      <div className="flex flex-col items-center sm:grid sm:grid-cols-12 gap-8 sm:items-stretch">
        {archives &&
          archives.map((archive: Archive) => (
            <Archives key={archive._id} archive={archive} />
          ))}
      </div>
    </div>
  )
}

export default page
