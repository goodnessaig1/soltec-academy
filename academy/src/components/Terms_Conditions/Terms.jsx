import React from 'react';
import Header from '../common/Header';
import { Logo2 } from '../../Utils/Assets';
import Logo from '../../assets/Logo-Vertical.png';
import Privacy from './Privacy';
const Terms = () => {
  return (
    <div>
      <Header />
      <div className='w-full min-h-screen flex justify-center mb-24'>
        <div className='w-full px-4 lg:px-32 flex-col gap-8 flex mt-6'>
          <div className='flex justify-center w-full flex-col gap-2 items-center'>
            <img src={Logo2} className='h-12' alt='' />
            <div className='flex flex-row items-center'>
              <div className='h-0.5 bg-blue-100 lg:w-32'></div>
              <h1 className='uppercase text-blue-900 text-nowrap text-lg mdl:text-xl font-semibold px-2 '>
                Terms and Conditions
              </h1>
              <div className='h-0.5 bg-blue-100 lg:w-32'></div>
            </div>
          </div>
          <div className='w-full flex flex-col mt-4 gap-4'>
            <div className='flex flex-col gap-3'>
              <h1 className='font-bold text-xl text-blue-800'>
                Welcome to Soltec Engineering Limited:
              </h1>
              <div className='flex flex-col gap-1'>
                <p>
                  These Terms and Conditions of Enrollment the "Terms" govern
                  the relationship between Soltec Engineering Limited referred
                  to as "Soltec," "the Academy," "we," "us," or "our" and
                  students referred to as "students," "you," or "your" who
                  enroll in our educational programs. By enrolling at Soltec,
                  you agree to abide by these Terms, which are designed to
                  ensure a fair and productive learning environment for all.
                </p>
                <span className='font-medium'>Purpose of the Terms:</span>
                <p>
                  These Terms outline the rights, responsibilities, and
                  expectations of both Soltec and its students. They are aimed
                  at providing clarity and transparency regarding the enrollment
                  process, academic policies, student conduct, and various
                  aspects of the student experience. We encourage you to read
                  these Terms carefully to understand your obligations and
                  rights as a student of Soltec.
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='font-bold'>Definitions</h3>
                <div className='flex flex-col gap-1'>
                  <span>In these Terms, the following definitions apply: </span>
                  <p>
                    Academic Programs: Refers to the educational courses and
                    programs offered by Soltec, including, but not limited to
                    diploma courses, workshops, and any other educational
                    offerings.
                  </p>
                  <ul className='flex flex-col gap-2 list-disc pl-4'>
                    <li>
                      <span className='font-semibold'>Code of Conduct</span>:
                      The set of behavioral guidelines and expectations that all
                      students are expected to adhere to while studying at
                      Soltec. This includes standards of academic integrity,
                      professionalism, and respectful interactions within the
                      Academy's community.
                    </li>
                    <li>
                      <span className='font-semibold'>
                        Confidential Information:
                      </span>{' '}
                      Information that is not publicly available and is
                      disclosed by Soltec or its students during the course of
                      their engagement with the Academy. This includes, but is
                      not limited to, proprietary academic materials, research
                      findings, and personal student records.
                    </li>
                    <li>
                      <span className='font-semibold'>Data Protection:</span>{' '}
                      The policies and procedures related to the collection,
                      storage, processing, and protection of personal data
                      provided by students and applicable data protection laws
                      and regulations.
                    </li>
                    <li>
                      <span className='font-semibold'>Effective Date:</span>
                      The date upon which these Terms come into effect, as
                      specified in Section 16 of these Terms.
                    </li>
                    <li>
                      <span className='font-semibold'>Enrollment:</span>
                      The formal process of registering and joining an academic
                      program or course at Soltec. Enrollment may include the
                      payment of tuition and fees and adherence to admission
                      criteria.
                    </li>
                    <li>
                      <span className='font-semibold'>Force Majeure:</span>
                      Unforeseeable events or circumstances beyond the control
                      of the Academy that may affect the delivery of academic
                      programs or other services, including but not limited to
                      natural disasters, pandemics, labor disputes, civil unrest
                      (sit-at-home) and government actions.
                    </li>
                    <li>
                      <span className='font-semibold'>Governing Law:</span>
                      The laws and legal jurisdiction that will apply in the
                      event of a dispute arising in connection with these Terms,
                      which includes the body of laws governing the law of
                      contract, and any other relevant law applicable in the
                      Federal Republic of Nigeria
                    </li>
                    <li>
                      <span className='font-semibold'>
                        Intellectual Property:
                      </span>
                      Often abbreviated as "IP," refers to a category of
                      intangible creations and assets resulting from human
                      intellectual effort, ingenuity, and innovation. IP
                      encompasses a wide range of creative and intellectual
                      works, including but not limited to patents, copyrights,
                      trademarks, trade secrets, inventions, literary and
                      artistic works, software, and any other original or
                      proprietary creations that may be subject to legal
                      protection.
                      <p>
                        In this context, IP is used to define the ownership and
                        rights associated with creative works produced by
                        students or the Academy itself during the course of
                        educational and research activities at Soltec.
                      </p>
                    </li>
                    <li>
                      <span className='font-semibold'>Privacy:</span> The
                      Academy's commitment to respecting the privacy and
                      confidentiality of students' personal information and the
                      procedures for obtaining, using, and protecting such data,
                      on the one hand, and the individual student’s commitment
                      to respecting the privacy and confidentiality of Soltec’s
                      confidential and, or privileged data or information, on
                      the other hand.
                    </li>
                    <li>
                      <span className='font-semibold'>Termination:</span> The
                      act of ending a student's enrollment at Soltec, either
                      voluntarily by the student or as a result of a breach of
                      the Academy's policies or procedures.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex flex-col mt-5 gap-3'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold text-blue-700'>
                  Admission Criteria and Process{' '}
                </h1>
                <span className='font-medium'>Eligibility for Admission</span>
              </div>
              <p>
                Soltec is committed to providing educational opportunities to a
                diverse student bodies. Admission eligibility is based on a
                combination of factors, including academic qualifications,
                aptitude, and personal characteristics. The Academy's admission
                criteria encompass the following aspects:
              </p>
              <h3 className='mt-1 font-semibold'>Academic Qualifications</h3>
              <span>
                To be eligible for admission, prospective students should
                typically meet the following criteria:
              </span>
              <ul className='list-disc ml-4 flex flex-col gap-1'>
                <li>
                  Possess a high school diploma, its equivalent, or other
                  recognized educational qualifications.
                </li>
                <li>
                  Provide official transcripts of previous academic records.
                </li>
                <li>
                  Meet program-specific academic prerequisites, which may vary
                  depending on the chosen course of study.{' '}
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-3 mt-2'>
              <h3 className='mt-1 font-semibold'>Aptitude and Skills </h3>
              <span>
                In addition to academic qualifications, Soltec values an
                individual's aptitude and skills relevant to the chosen field of
                study. Applicants may be evaluated on the basis of:
              </span>
              <ul className='list-disc ml-4 flex flex-col gap-1'>
                <li>Standardized tests, where applicable.</li>
                <li>Aptitude tests specific to certain programs.</li>
                <li>
                  A portfolio of prior work or projects for creative and
                  technical programs.
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-3 mt-2'>
              <h3 className='mt-1 font-semibold'>Personal Characteristics</h3>
              <span>
                The Academy is dedicated to fostering a diverse and inclusive
                learning environment. Therefore, we also consider an applicant's
                personal characteristics, including:
              </span>
              <ul className='list-disc ml-4 flex flex-col gap-1'>
                <li>Commitment to learning and professional development.</li>
                <li>
                  Interpersonal skills, teamwork, and leadership qualities.{' '}
                </li>
                <li>Passion for the chosen field of study.</li>
              </ul>
            </div>
            <div className='flex flex-col gap-3 mt-2'>
              <h3 className='mt-1 text-blue-800 font-semibold'>
                Application Process and Requirements{' '}
              </h3>
              <span>
                Prospective students are required to follow a structured
                application process, which may vary depending on the program
                they are applying to. The typical application steps include:
              </span>
              <h3 className='mt-1 font-semibold'>Application Form</h3>
              <span>
                Applicants should complete and submit the Academy's official
                application form. This form serves as the first step in the
                admission process and includes personal details, program
                selection, and a declaration of the authenticity of information
                provided.
              </span>
              <h3 className='mt-1 font-semibold'>Supporting Documents</h3>
              <span>
                Applicants must provide the following supporting documents along
                with their application:
              </span>
              <ul className='list-disc ml-4 flex flex-col gap-1'>
                <li>
                  Certified copies of academic transcripts and certificates.{' '}
                </li>
                <li>Standardized test scores (where applicable). </li>
                <li>
                  Letters of recommendation from educators or professionals (if
                  required).
                </li>
                <li>
                  A personal statement or essay explaining their motivation for
                  pursuing the selected program.
                </li>
                <li>
                  A non-refundable application fee, as specified by the Academy.{' '}
                </li>
              </ul>
              <h3 className='mt-1 font-semibold'> Interviews or Auditions </h3>
              <span>
                For specific programs, the admission process may include
                interviews, auditions, or portfolio assessments. These are
                conducted to evaluate an applicant's suitability for the program
                and to assess their skills and readiness.
              </span>
              <h3 className='mt-1 font-semibold'> Admission Decision </h3>
              <span>
                Soltec employs a holistic approach to evaluate applications,
                considering academic achievements, test scores, recommendations,
                interviews, and personal statements. Admission decisions are
                based on a combination of these factors, and applicants will be
                notified of their admission status in a timely manner.
              </span>
            </div>
            <div className='flex flex-col gap-1.5 mt-2'>
              <h3 className='mt-1 text-blue-800 font-semibold'>
                Tuition and Fees
              </h3>
              <span>
                At Soltec, we understand that the cost of education is an
                important consideration for students and their families. This
                section provides a comprehensive overview of the tuition and
                fees structure, payment methods, deadlines, and policies.{' '}
              </span>
              <h3 className='mt-1 font-semibold'>Tuition Fees</h3>
              <span>
                Tuition fees are designed to cover the cost of educational
                resources, instruction, and services provided by the Academy.
                The following key points outline the tuition fee structure:
              </span>
              <h3 className='mt-1 font-semibold'>Tuition Fee Amount</h3>
              <span>
                The tuition fee amount for each program is determined annually
                and is specified in the official fee schedule published by the
                Academy. Tuition fees may vary depending on the program.
              </span>
              <h3 className='mt-1 font-semibold'>Payment Periods </h3>
              <span>
                Students are required to pay tuition for each academic period as
                specified in the academic calendar. The exact due dates for each
                payment are outlined in the Academy's payment schedule.
              </span>
              <h3 className='mt-1 font-semibold'>Fee Adjustments</h3>
              <span>
                The Academy reserves the right to adjust tuition fees. While we
                strive to keep changes to a minimum, fee adjustments may occur
                due to inflation, changes in program offerings, or other
                financial considerations. Any changes to tuition fees will be
                communicated to students in advance.
              </span>
              <h3 className='mt-1 font-semibold'> Additional Fees </h3>
              <span>
                In addition to tuition, students may incur additional fees
                related to specific services and activities. The following
                points provide details on these additional fees:
              </span>
              <h3 className='mt-1 font-semibold'>Registration Fee </h3>
              <span>
                A non-refundable registration fee is charged to cover
                administrative costs associated with enrolling students in
                courses and maintaining records. This fee is paid at the
                beginning of each academic year or term.
              </span>
              <h3 className='mt-1 font-semibold'>
                Course Materials and Supplies
              </h3>
              <span>
                Some programs may require students to purchase course materials,
                textbooks, or specialized supplies. These costs are in addition
                to tuition fees and will vary based on the specific program and
                courses taken.
              </span>
              <h3 className='mt-1 font-semibold'>Payment Methods</h3>
              <span>
                To facilitate the payment of tuition and fees, Soltec offers
                various payment methods. Students have the option to choose the
                method that best suits their needs. Accepted payment methods may
                include credit or debit cards, electronic funds transfers, and
                other electronic payment options to the Academy recipient bank
                account.
              </span>
              <h3 className='mt-1 font-semibold'>Payment Deadlines </h3>
              <span>
                It is imperative that students adhere to payment deadlines to
                ensure their enrollment remains in good standing. Payment
                deadlines for tuition and fees are specified in the Academy's
                academic calendar and payment schedule. Failure to meet these
                deadlines may result in financial penalties or disenrollment
                from courses.
              </span>
            </div>
            <div className='flex flex-col gap-1.5 mt-2'>
              <h3 className='mt-2 text-blue-800 font-semibold'>
                Academic Policies
              </h3>
              <h3 className='mt-2 font-semibold'>
                Academic Programs and Curriculum
              </h3>
              <span>
                Program Description: Soltec offers a range of academic programs
                designed to provide students with a robust educational
                experience. Details about specific programs, including
                curriculum, courses, and program objectives, are available in
                official program documentation.
              </span>
              <span>
                Course Registration: Students are required to register for
                courses within the specified timeframes and in accordance with
                academic advising. Any changes to course registration must
                adhere to Academy policies and deadlines.
              </span>
              <h3 className='mt-1 font-semibold'>Grading and Assessment</h3>
              <span>
                <span className='font-medium'>Grading System:</span> Soltec
                employs a standardized grading system to evaluate student
                performance. The grading system is designed to provide an
                accurate assessment of a student's academic achievement. Grading
                scales and criteria may vary by program.
              </span>
              <span>
                <span className='font-medium'>Grade Reporting: </span> Students
                will receive timely feedback on their performance. Final grades,
                including individual assignment and exam grades, will be made
                available to each student. Students are responsible for
                regularly monitoring their academic progress.
              </span>
              <h3 className='mt-1 font-semibold'>
                Code of Conduct and Academic Integrity
              </h3>
              <span>
                <span className='font-medium'>Academic Honesty: </span> Soltec
                upholds the highest standards of academic integrity. Plagiarism,
                cheating, and other forms of academic dishonesty are strictly
                prohibited. Students are expected to acknowledge sources, use
                proper citation formats, and submit their own original work.
              </span>
              <span>
                <span className='font-medium'>
                  Misconduct and Consequences:{' '}
                </span>{' '}
                Any form of academic misconduct will be subject to
                investigation. Consequences may include disciplinary actions,
                reduced grades, course failure, or, in severe cases, suspension
                or expulsion. The Academy follows a due process and
                investigation procedure to ensure fairness.
              </span>
              <h3 className='mt-1 font-semibold'>Attendance and Punctuality</h3>
              <span>
                <span className='font-medium'>Attendance Policy: </span> Regular
                class attendance is expected of all students. Instructors may
                have specific attendance policies for their courses. Students
                are responsible for understanding and adhering to these
                policies.
              </span>

              <span>
                <span className='font-medium'>Tardiness: </span> Punctuality is
                essential. Late arrival to classes disrupts the learning
                environment and may lead to consequences defined by the
                instructor or program.
              </span>
              <span>
                <span className='font-medium'>Excused Absences: </span> Valid
                reasons for absences, such as illness or family emergencies,
                should be communicated to instructors in advance or as soon as
                possible. Instructors may provide opportunities to make up
                missed work.
              </span>
              <h3 className='mt-1 font-semibold'>
                Academic Advising and Support
              </h3>
              <span>
                <span className='font-medium'>Academic Advising: </span> Soltec
                provides academic advising to assist students in their
                educational journey. Advisors are available to help students set
                academic goals, plan their course schedules, and address
                academic concerns.
              </span>
              <span>
                <span className='font-medium'>
                  Tutoring and Support Services::{' '}
                </span>{' '}
                The Academy offers tutoring and support services to help
                students succeed in their coursework. These resources are
                available to all students and can be accessed upon reques
              </span>
              <h3 className='mt-1 font-semibold'>
                Course Evaluation and Feedback
              </h3>
              <span>
                <span className='font-medium'>Feedback Mechanism: </span> The
                Academy values student input. Students are encouraged to provide
                constructive feedback on courses and instructors through course
                evaluations. This feedback is confidential and used for
                continuous improvement.
              </span>
              <h3 className='mt-1 font-semibold'>
                Course Evaluation and Feedback
              </h3>
              <span>
                <span className='font-medium'>Course Evaluation Results: </span>{' '}
                Aggregate course evaluation results are reviewed by the Academy
                to enhance the quality of education and instruction.
              </span>
            </div>
            <div className='flex flex-col gap-1.5 mt-2'>
              <h3 className='mt-1 text-blue-800 font-semibold'>
                Student Rights and Responsibilities
              </h3>
              <h3 className='mt-1 font-semibold'>Student Rights</h3>
              <span>-Right to Access Education</span>
              <span>
                Soltec recognizes and upholds the fundamental right of every
                student to access quality education without discrimination.{' '}
              </span>
              <span>-Academic Freedom</span>
              <span>
                Students have the right to engage in open and free intellectual
                inquiry, to express their opinions, and to explore diverse
                perspectives in a respectful and responsible manner.
              </span>
              <span>-Non-Discrimination and Equal Opportunity </span>
              <span>
                Soltec is committed to maintaining a diverse and inclusive
                learning environment, and students have the right to be free
                from discrimination and harassment based on protected
                characteristics, such as race, gender, religion, disability, and
                sexual orientation.{' '}
              </span>
              <span>-Privacy</span>
              <span>
                Students have the right to privacy regarding their personal and
                academic information, in accordance with applicable data
                protection laws.{' '}
              </span>
              <span>-Accommodation for Disabilities</span>
              <span>
                Students with disabilities have the right to reasonable
                accommodations that allow them to participate fully in the
                educational experience, subject to applicable laws and
                regulations.
              </span>
              <span>-Access to Facilities and Resources </span>
              <span>
                Students have the right to access Academy facilities and
                resources necessary for their education, as long as they follow
                established guidelines and policies.{' '}
              </span>
              <h3 className='mt-3 font-semibold'>Student Responsibilities</h3>
              <span>-Academic Integrity </span>
              <span>
                Students are responsible for upholding the highest standards of
                academic integrity and for avoiding plagiarism, cheating, and
                other forms of academic misconduct.{' '}
              </span>
              <span>-Conduct and Respect</span>
              <span>
                Students are expected to conduct themselves with respect for
                others and to adhere to a code of conduct that promotes a
                respectful, inclusive, and safe environment.
              </span>
              <span>-Attendance and Punctuality</span>
              <span>
                Students are responsible for regular class attendance and
                punctuality, as these are crucial for academic success.
              </span>
              <span>-Payment of Tuition and Fees </span>
              <span>
                Students are responsible for the payment of tuition and any
                associated fees in accordance with the Academy's financial
                policies.
              </span>
              <span>-Compliance with Policies</span>
              <span>
                Students are expected to comply with all Academy policies,
                including those related to safety, health, and data protection.{' '}
              </span>
              <span>-Participation and Engagement</span>
              <span>
                Students are encouraged to actively engage in their educational
                experience, which includes participating in class discussions,
                completing assignments, and seeking help when needed.{' '}
              </span>
              <span>-Respect for Intellectual Property</span>
              <span>
                Students must respect the intellectual property rights of the
                Academy, as well as fellow students and adhere to copyright and
                plagiarism policies.{' '}
              </span>
              <span>-Prompt Reporting of Concerns</span>
              <span>
                Students are responsible for promptly reporting any concerns
                related to academic or personal matters, including academic or
                personal misconduct.{' '}
              </span>
              <h3 className='mt-2 font-semibold'>Conflict Resolution</h3>

              <span>Mediation and Grievance Procedures</span>
              <span>
                In case of disputes or grievances related to the rights and
                responsibilities outlined above, students disputes and conflicts
                should be promptly report to the Academy.
              </span>
              <span>
                Soltec is committed to providing a fair, transparent, and
                impartial process for addressing student concerns and conflicts.
              </span>
            </div>
            <div className='flex flex-col gap-1.5 mt-2'>
              <h3 className='mt-1 text-blue-800 font-semibold'>
                Intellectual Property
              </h3>
              <h3 className='mt-1 font-semibold'>
                Ownership of Intellectual Property{' '}
              </h3>
              <span>Coursework and Projects</span>
              <span>
                At Soltec, we acknowledge the importance of fostering innovation
                and creativity within our academic community. As a student, you
                retain ownership of intellectual property you create, such as
                coursework, projects, and research, to the extent provided by
                applicable law. We encourage you to explore and develop your
                ideas while respecting the intellectual property rights of
                others.
              </span>
              <span>Collaborative Projects </span>
              <span>
                In cases where you engage in collaborative projects or research
                activities facilitated by the Academy, the ownership and rights
                to the resulting intellectual property shall be solely owned by
                Soltec.
              </span>
              <span>Use of Academy Resources</span>
              <span>
                Soltec provides access to various resources, facilities, and
                equipment to support your academic and research pursuits. When
                using Academy resources to create intellectual property, it is
                important to be aware that the use of such resources may affect
                the ownership or rights associated with the resulting
                intellectual property. In such cases, the Academy shall retain
                sole ownership of any resulting intellectual property.{' '}
              </span>
              <span>Protection and Commercialization</span>
              <span>
                In some cases, the Academy may recognize the commercial
                potential of intellectual property created by students. When the
                Academy identifies such opportunities, we will work
                collaboratively with you, respecting your rights, to explore
                avenues for protection, commercialization, and distribution. Any
                benefits derived from such commercialization will be subject to
                mutually agreed-upon terms and arrangements.{' '}
              </span>
            </div>
            <Privacy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
