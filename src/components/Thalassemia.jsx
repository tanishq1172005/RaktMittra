import blood from '../assets/blood.webp'
import dna from '../assets/icons8-dna-48.png'
import patient from '../assets/icons8-patient-100.png'

export default function Thalassemia() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title & Description */}
        <h2 className="text-4xl font-bold mb-4 text-center">
          What is Thalassemia?
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16">
          An inherited blood disorder characterized by less oxygen-carrying
          proteins (Hemoglobin) and fewer Red Blood Cells in the body than
          normal.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <img
              src={dna}
              alt="Genetic Disorder"
              className="h-40 mb-6"
            />
            <p className="text-lg">
              A child is born with a genetic blood disorder –{" "}
              <span className="font-semibold">Thalassemia Major</span>
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <div className="flex gap-6 mb-6">
              <img
                src={blood}
                alt="Normal Blood"
                className="h-28"
              />
            </div>
            <p className="text-lg">
              Without medical support and healthcare, the blood disorder proves{" "}
              <span className="font-semibold">fatal by the age of 30</span>
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <img
              src={patient}
              alt="Patient Illustration"
              className="h-40 mb-6"
            />
            <p className="text-lg">
              The body is unable to produce sufficient Hemoglobin to deliver
              oxygen to various parts of the body.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}