import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";
import { RouterHead } from "~/components/common/RouterHead"; // Import the head component

export default component$(() => {
  return (
    <>
      {/* Include RouterHead at the top level */}
      <RouterHead />

      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
