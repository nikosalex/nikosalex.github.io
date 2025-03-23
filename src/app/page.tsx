import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Top Header */}
      <header className="w-full bg-[#303936] text-white py-3 px-4 flex justify-between items-center">
        <div className="flex-1 text-center text-sm md:text-base">
          Μπορείς και εσύ να αποκτήσεις το δικό σου Ηλεκτρονικό Προσκλητήριο άμεσα και γρήγορα.
        </div>
        <Button className="bg-[#6aaa68] hover:bg-[#5a9a58] text-white px-4">
          ΕΔΩ
        </Button>
      </header>

      {/* Main Invitation */}
      <div className="max-w-4xl w-full px-4 md:px-8 py-8 relative invitation-container">
        {/* Decorative elements - positioned according to original design */}
        <div className="absolute top-10 right-0 z-10 decorative-container">
          <Image
            src="/images/monkey.png"
            alt="Decorative monkey"
            width={180}
            height={180}
            priority
            className="decorative-image"
            crossOrigin="anonymous"
          />
        </div>
        <div className="absolute top-10 right-28 z-10 decorative-container">
          <Image
            src="/images/balloon1.png"
            alt="Balloon decoration"
            width={80}
            height={80}
            priority
            className="decorative-image"
            crossOrigin="anonymous"
          />
        </div>
        <div className="absolute top-24 left-4 z-10 decorative-container">
          <Image
            src="/images/balloon2.png"
            alt="Balloon decoration"
            width={80}
            height={80}
            priority
            className="decorative-image"
            crossOrigin="anonymous"
          />
        </div>

        {/* Invitation Text - now with more spacing and slightly larger */}
        <div className="invitation-text text-2xl md:text-3xl lg:text-4xl mb-12 mt-12 pt-6">
          ΣΑΣ ΠΡΟΣΚΑΛΟΥΜΕ ΣΤΗ<br />
          ΒΑΠΤΙΣΗ ΤΟΥ ΓΙΟΥ ΜΑΣ ΤΗΝ<br />
          ΚΥΡΙΑΚΗ 15 ΙΟΥΛΙΟΥ 2025 &<br />
          ΩΡΑ 12:00Μ.Μ. ΣΤΟΝ ΙΕΡΟ ΝΑΟ<br />
          ΜΕΤΑΜΟΡΦΩΣΕΩΣ ΤΟΥ<br />
          ΣΩΤΗΡΟΣ
        </div>

        {/* Lion Image - made slightly larger */}
        <div className="flex justify-center mb-16">
          <Image
            src="/images/lion.png"
            alt="Lion decoration"
            width={320}
            height={320}
            priority
            className="decorative-image w-auto h-auto max-w-full"
            crossOrigin="anonymous"
          />
        </div>

        {/* "EΓΩ" Section with Child Photo - improved styling */}
        <div className="text-center mb-10">
          <h2 className="invitation-text text-5xl mb-6">ΕΓΩ</h2>
          <div className="border-8 border-white inline-block p-2 shadow-lg bg-white">
            <Image
              src="/images/child.jpeg"
              alt="Child photo"
              width={240}
              height={240}
              className="object-cover w-[200px] md:w-[240px] h-[200px] md:h-[240px]"
              priority
              crossOrigin="anonymous"
            />
          </div>
        </div>

        {/* Child Name - increased font size */}
        <div className="text-center mb-10">
          <h2 className="invitation-text text-4xl">ΣΤΕΛΙΟΣ</h2>
        </div>

        {/* Parents Section - improved spacing */}
        <div className="text-center mb-10">
          <h3 className="invitation-text text-3xl mb-4">ΟΙ ΓΟΝΕΙΣ ΜΟΥ</h3>
          <p className="text-xl">ΚΩΣΤΑΣ ΠΑΠΑΔΟΠΟΥΛΟΣ &</p>
          <p className="text-xl">ΕΦΗ ΚΑΡΡΑ</p>
        </div>

        {/* Godparents Section - improved spacing */}
        <div className="text-center mb-10">
          <h3 className="invitation-text text-3xl mb-4">ΟΙ ΝΟΝΑ ΜΟΥ</h3>
          <p className="text-xl">ΝΙΚΟΛΕΤΑ ΠΑΠΑ</p>
        </div>

        {/* Church Section - larger map */}
        <div className="text-center mb-10">
          <h3 className="invitation-text text-3xl mb-6">Η ΕΚΚΛΗΣΙΑ</h3>
          <div className="w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.9979034123674!2d22.9642921!3d40.3773555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838fe7a9a7395%3A0xde6f6c8431b3364c!2sI.N.%20Metamorphoseos%20Tou%20Sotiros!5e0!3m2!1sen!2sgr!4v1654345678901!5m2!1sen!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Info - improved styling */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mb-12">
          <div>
            <h4 className="text-xl md:text-2xl mb-2 font-semibold">Κώστας</h4>
            <p className="text-lg md:text-xl">τηλ: 6985060000</p>
          </div>
          <div>
            <h4 className="text-xl md:text-2xl mb-2 font-semibold">Έφη</h4>
            <p className="text-lg md:text-xl">τηλ: 6985060000</p>
          </div>
        </div>

        {/* RSVP Form - improved styling */}
        <div className="max-w-md mx-auto bg-white/80 p-4 md:p-6 rounded-lg shadow-lg">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Ονοματεπώνυμο"
              className="input-field"
            />
            <input
              type="email"
              placeholder="Email"
              className="input-field"
            />
            <textarea
              placeholder="Μήνυμα"
              className="input-field h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="submit-button"
            >
              Αποστολή
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center p-4 text-sm text-gray-700 mt-8">
        © Copyright 2022 Proslitirio4u.gr Rights Reserved - Created with ♥ by MazeAdv
      </footer>
    </main>
  );
}
