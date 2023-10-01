import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Industry, getIndustries, getIndustrySecret } from "@/lib/industri";

export default function Home({
  industries,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="font-bold text-4xl">Liam Industri</h1>
      <p className="text-center mt-4">
        Velkommen til Liam&apos;s Industri, den ultimate destinasjonen for alle
        som er nysgjerrige på mangfoldet av industrier som preger vår moderne
        verden! Vi bringer deg en unik og informativ opplevelse, hvor du kan
        utforske en rekke ulike næringer og få innsikt i hvordan de fungerer,
        hva som driver dem, og hvordan de påvirker vår hverdag.
      </p>
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {industries.map((industry, i) => (
          <article
            role="button"
            className="p-4 rounded-md border border-neutral-200 hover:shadow-md transition-shadow"
            key={i}
          >
            <h2 className="font-semibold">{industry.name}</h2>
            <p>{industry.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export const getStaticProps = (async () => {
  return {
    props: {
      industries: getIndustries(),
      industrySecret: getIndustrySecret(),
    },
  };
}) satisfies GetStaticProps<{
  industries: Industry[];
  industrySecret: string;
}>;
