import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Grid from "./_components/Grid";
import Breadcrumb from "./_components/Breadcrumb";

const getLandingPageData = async () => {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}`;
  let req = await fetch (url, { cache: "no-store" });

  const storyData = await req.json();
  const { header_section, hero_section, grid_section } = storyData.story.content;

  return {
    header_section: header_section[0],
    hero_section: hero_section[0],
    grid_section: grid_section,
  }
}

export default async function Home() {
  const storyData = await getLandingPageData();

  return (
    <>
    {/* <Header data={storyData.header_section} /> */}
    {/* <Breadcrumb/> */}
    <Hero data={storyData.hero_section} />
    <Grid data={storyData.grid_section} />


    </>
  );
}