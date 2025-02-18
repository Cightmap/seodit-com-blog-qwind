import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="py-12 md:py-20">
          <div class="max-w-3xl mx-auto text-center p-6 rounded-md shadow-xl dark:shadow-none">
            <h2 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
              <span class="text-[#039de1]">Secure a Premium SEO Brand Now</span> hey{" "}
              <br class="block sm:hidden" />
              <span class="text-[#039de1] sm:whitespace-nowrap">
                ...
              </span>
            </h2>
            <p class="text-xl text-gray-600 dark:text-slate-400">
            SEOdit.com - The Future of AI SEO & Automation. <br class="hidden md:inline" />
            Serious inquiries only – Submit your interest today.
            </p>

            <div class="mt-6">
              <a
                class="btn btn-primary mb-4 sm:mb-0 w-full sm:w-auto"
                href="https://seodit.com"
                target="_blank"
                rel="noopener"
              >
                Request Info & Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
