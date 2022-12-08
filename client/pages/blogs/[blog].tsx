import { Layout, Sidebar, ToolCard } from "@/componants";
import { Logo } from "@/public/svgs";
import { useRouter } from "next/router";
export const sidebarData = [
  {
    title: "Google Sheet",
    Icon: Logo,
    listData: [
      { title: "How To Learn", Icon: Logo },
      { title: "How To Learn", Icon: Logo },
      { title: "How To Learn", Icon: Logo },
    ],
  },
  {
    title: "Learn Sheet",
    Icon: Logo,
    listData: [
      { title: "How To Learn", Icon: Logo },
      { title: "How To Learn", Icon: Logo },
      { title: "How To Learn", Icon: Logo },
    ],
  },
  {
    title: "Google Sheet",
    Icon: Logo,
    listData: [
      { title: "How To Learn", Icon: Logo },
      { title: "How To Learn", Icon: Logo },
      { title: "How To Learn", Icon: Logo },
    ],
  },
];
const data = [
  {
    Icon: Logo,
    title: "Color Genrate",
    paragraph: "how to genrate color",
    like: 454,
    slug: "color-genrate",
  },
  {
    Icon: Logo,
    title: "Color Genrate",
    paragraph: "how to genrate color",
    like: 454,
    slug: "color-genrate",
  },
  {
    Icon: Logo,
    title: "Color Genrate",
    paragraph: "how to genrate color",
    like: 454,
    slug: "color-genrate",
  },
  {
    Icon: Logo,
    title: "Color Genrate",
    paragraph: "how to genrate color",
    like: 454,
    slug: "color-genrate",
  },
];

const Tool = () => {
  const router = useRouter();
  const slug = router.query.tool;

  return (
    <Layout sidebarData={sidebarData} Card={ToolCard} CardData={data}></Layout>
  );
};

// html
{
  /* <h1 id="how-to-use-github">How To Use Github</h1>
<h2 id="lets--start-the-tutorial">Let`s  Start The Tutorial</h2>
<p>sat saheb ji bolo <strong>satguru</strong> <a href="https://kyixnu-3000.preview.csb.app/blogs/hhdhfd">dev</a> ji jay ho bandi chood sasta sak ddfd ldsds idsijjdfdfdkfbncjdkfkjdkfjkdjfjdjf bcdhhjdd hhjdshdhskd sdsd sddj fhd j <em>djsduijhc</em>  chsdhjsds d <s>sdhsjdsdjs</s></p>
<ul>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> sat saheb</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> sat saheb 2</li>
</ul>
<blockquote>
<p>sat sahehb ji hello</p>
</blockquote>
<pre><code>sat saheb ji() {}
</code></pre>
<ul>
<li>Sat Saheb Ji</li>
<li>Sat Saheb Ji 2</li>
<li>List item</li>
<li>Sat Saheb Ji</li>
<li>Sat Saheb Ji</li>
</ul>
<ol start="2">
<li>
<p>Sat Saheb Ji 2</p>
</li>
<li>
<p>List item<br>
4. Sat Saheb Ji</p>
<p>function getCode(){<br>
sat saheb ji<br>
}</p>
</li>
</ol>
<blockquote>
<p>sat saheb ji bolo <strong>satsaguu</strong> dev ji ki jay <strong>saho</strong></p>
</blockquote>
<p><img src="https://plus.unsplash.com/premium_photo-1667043243144-3e9c47dc23b9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw=&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="enter image description here"></p> */
}

export default Tool;
