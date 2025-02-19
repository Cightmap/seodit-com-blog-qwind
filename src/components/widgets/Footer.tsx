import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import IconTwitter from "~/components/icons/IconTwitter"
import IconInstagram from "~/components/icons/IconInstagram"
import IconFacebook from "~/components/icons/IconFacebook"
import IconGithub from "~/components/icons/IconGithub"

export default component$(() => {
  const links = [
    {
      title: "SEOdit.com",
      items: [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contact" },
        { title: "Blog", href: "/blog" },
        { title: "Privacy", href: "/privacy" },
        { title: "Terms", href: "/terms" },
        { title: "Sitemap", href: "/sitemap" },
      ],
    },
    {
      title: "SuperCight Domains",
      items: [
        { title: "Home", href: "https://supercight.com" },
        { title: "About", href: "https://supercight.com/about" },
        { title: "Contact", href: "https://supercight.com/contact" },
        { title: "Blog", href: "https://supercight.com/blog" },
        { title: "Shop Domains", href: "https://supercight.com/shop" },
      ],
    },
    {
      title: "PublishInk Agency",
      items: [
        { title: "Home", href: "https://publishink.agency" },
        { title: "About", href: "https://publishink.agency/about" },
        { title: "Contact", href: "https://publishink.agency/contact" },
        { title: "Blog", href: "https://publishink.agency/blog" },
        { title: "Blogging & Investment Packages", href: "https//publishink.agency/content-services" },
        { title: "Marketing & Revenue Packages", href: "https//publishink.agency/affiliate-marketing-services" },
        { title: "SEO & Performance Packages", href: "https//publishink.agency/seo-services" },
        { title: "Backlinking & Growth Packages", href: "https//publishink.agency/backlinking-services" },
      ],
    },
  ];

  const social = [
    { label: "Twitter", icon: IconTwitter, href: "#" },
    { label: "Instagram", icon: IconInstagram, href: "#" },
    { label: "Facebook", icon: IconFacebook, href: "#" },
    {
      label: "Github",
      icon: IconGithub,
      href: "https://github.com/Cightmap/seodit-com-blog-qwind",
    },
  ];

  return (
    <footer class="border-t border-gray-200 dark:border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="mb-2">
              <Link class="inline-block font-bold text-xl" href={"/"}>
                SEOdit.com
              </Link>
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
            Whether used for an SEO tool, SaaS platform, agency, or AI-powered search solution, SEOdIt.com is ready to become a powerhouse brand in the billion-dollar search industry.
            </div>
            <div class="mb-2">
              <Link class="inline-block font-bold text-xl" href={"/"}>
                SuperCight Domains
              </Link>
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
            We understand that a domain isn’t just a web address—it’s a brand’s first impression and competitive edge. Whether you’re a startup, an investor, or an established business, SuperCight Domains provides expertly curated domains that align with your industry, innovation, and vision.            </div>
            <div class="mb-2">
              <Link class="inline-block font-bold text-xl" href={"/"}>
                PublishInk Agency
              </Link>
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
            At PublishInk Agency, we don’t just write blog content—we craft high-value, long-form articles designed to engage, inform, and convert. Our subscription-based publishing services offer fully customizable pricing based on your content volume and publishing frequency, ensuring you get precisely what your brand needs.            </div>
          </div>
          {links.map(({ title, items }, index) => (
            <div key={index} class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="text-gray-800 dark:text-gray-300 font-medium mb-2">{title}</div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm">
                  {items.map(({ title, href }, index2) => (
                    <li key={index2} class="mb-2">
                      <Link
                        class="text-gray-600 hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div class="md:flex md:items-center md:justify-between py-6 md:py-8">
          <ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
            {social.map(({ label, href, icon: Icon }, index) => (
              <li key={index}>
                <Link
                  class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label={label}
                  title={label}
                  href={href}
                >
                  {typeof Icon !== "undefined" && <Icon />}
                </Link>
              </li>
            ))}
          </ul>

          <div class="text-sm text-gray-700 mr-4 dark:text-slate-400">
            <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
            A{" "}
            <a class="text-secondary-800 underline dark:text-gray-200" href="https://supercight.com/">
              {" "}
              SuperCight Domain
            </a>{" "}
            · All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
});
