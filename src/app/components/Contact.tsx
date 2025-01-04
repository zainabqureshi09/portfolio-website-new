

export default function ContactPage() {
  return (
    <div>
      <section className="py-20 px-6 text-blue-900 text-center min-h-screen">
        <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg mb-8">Feel free to reach out via this form:</p>
        <form
          action="https://formspree.io/f/xgvvpykn" // Replace `your_formspree_id` with your actual Formspree ID
          method="POST"
          className="max-w-lg mx-auto bg-white text-darkPink p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-seaGreen"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-seaGreen"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-seaGreen"
              rows={5}
              placeholder="Your Message"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-200 text-blue-900 font-bold rounded-md hover:bg-blue-200 hover:text-blue-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
