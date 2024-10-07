import React, { useState } from "react";
import "./toolkit.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toolkit = () => {
  const [selectedTest, setSelectedTest] = useState(null); // Manage which test is selected
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility
  const [answers, setAnswers] = useState({}); // Track answers for each question
  const [errors, setErrors] = useState({}); // Track errors for validation

  const testQuestions = {
    depression: [
      "Do you feel sad or empty?",
      "Have you lost interest in activities you once enjoyed?",
      "Do you have trouble sleeping or sleep too much?",
      "Do you feel tired or have little energy?",
      "Do you struggle to concentrate or make decisions?",
      "Do you experience feelings of worthlessness or excessive guilt?",
      "Do you have thoughts of death or suicide?",
      "Do you feel restless or slowed down physically?",
      "Have you experienced significant weight changes without trying?",
      "Do you find it difficult to experience joy or pleasure in life?",
    ],

    anxiety: [
      "Do you often feel nervous or anxious?",
      "Do you struggle to control your worry?",
      "Do you feel restless, wound-up, or on edge?",
      "Do you get easily fatigued?",
      "Do you have difficulty concentrating or does your mind go blank?",
      "Do you have muscle tension or frequent headaches?",
      "Do you experience irritability even over small issues?",
      "Do you have trouble falling or staying asleep due to worry?",
      "Do you feel a sense of impending danger or panic?",
      "Do you avoid social situations due to fear or worry?",
    ],

    PTSD: [
      "Do you have recurring, unwanted memories of a traumatic event?",
      "Do you avoid places or situations that remind you of the trauma?",
      "Do you have trouble sleeping or experience nightmares?",
      "Do you feel detached or estranged from others?",
      "Do you experience flashbacks, as if the traumatic event is happening again?",
      "Do you find yourself easily startled or on high alert?",
      "Do you struggle with feelings of guilt or shame related to the trauma?",
      "Do you avoid talking about the traumatic event?",
      "Do you experience emotional numbness or difficulty experiencing positive emotions?",
      "Do you find it hard to concentrate or remember details of daily tasks?",
    ],

    eatingDisorder: [
      "Do you have concerns about your body weight or shape?",
      "Do you often restrict food intake or binge eat?",
      "Do you use food as a way to cope with stress or emotions?",
      "Do you feel guilty or ashamed after eating?",
      "Do you frequently check your weight or body in the mirror?",
      "Do you avoid eating in front of others?",
      "Do you engage in excessive exercise to control your weight?",
      "Do you experience fluctuations in your weight over short periods?",
      "Do you often feel out of control when eating?",
      "Do you fear gaining weight, even if others think you are thin?",
    ],

    bipolar: [
      "Do you experience extreme mood swings?",
      "Do you have periods of high energy followed by low energy?",
      "Do you feel overly happy or excited for no apparent reason?",
      "Do you experience racing thoughts or have trouble focusing?",
      "Do you engage in risky behaviors during mood highs (e.g., spending sprees)?",
      "Do you feel irritable or agitated during your highs?",
      "Do you experience prolonged periods of sadness or hopelessness?",
      "Do you have trouble sleeping, or do you sleep excessively during mood shifts?",
      "Do your mood swings interfere with your relationships or daily life?",
      'Do you feel like you are "on top of the world" one moment, but deeply depressed the next?',
    ],

    ADHD: [
      "Do you find it difficult to stay focused or organized?",
      "Do you act impulsively or struggle to sit still?",
      "Do you find yourself easily distracted by external stimuli?",
      "Do you frequently interrupt others during conversations or activities?",
      "Do you struggle to follow through on tasks or instructions?",
      "Do you often feel restless or fidgety, even in situations where it is inappropriate?",
      "Do you procrastinate or have trouble starting tasks that require focus?",
      "Do you lose important items frequently, such as keys or phones?",
      'Do you struggle with time management and often feel "behind schedule"?',
      "Do you avoid tasks that require prolonged mental effort, like reading or writing?",
    ],

    addiction: [
      "Do you find it hard to stop using a substance once you start?",
      "Have you tried to cut down on the use of alcohol or drugs but failed?",
      "Do you use the substance more often or in larger amounts than you intended?",
      "Do you spend a lot of time thinking about or recovering from substance use?",
      "Have you given up activities you once enjoyed in favor of using substances?",
      "Do you continue using a substance despite knowing it causes problems in your life?",
      "Do you experience cravings or strong urges to use the substance?",
      "Do you need to use more of the substance to get the same effect (tolerance)?",
      "Do you experience withdrawal symptoms when not using the substance?",
      "Do you find that your substance use has negatively impacted your relationships or work?",
    ],

    postpartum: [
      "Do you feel overwhelmed or hopeless since giving birth?",
      "Do you have trouble bonding with your baby?",
      "Do you feel excessively worried about your baby’s well-being?",
      "Do you experience mood swings or frequent crying?",
      "Do you have trouble sleeping, even when your baby is asleep?",
      "Do you feel like you are not a good enough mother?",
      "Do you have thoughts of harming yourself or your baby?",
      "Do you feel detached from your baby or those around you?",
      "Do you experience irritability or anger more than usual?",
      "Do you have trouble enjoying activities you used to find pleasurable?",
    ],
  };

  const options = ["Always", "Sometimes", "Often", "Never"];

  const openModal = (test) => {
    setSelectedTest(test);
    setAnswers({}); // Reset answers when a new test is selected
    setErrors({}); // Reset errors
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTest(null);
    setIsModalOpen(false);
  };

  const handleAnswerChange = (questionIndex, value) => {
    setAnswers({
      ...answers,
      [questionIndex]: value,
    });
    setErrors({
      ...errors,
      [questionIndex]: false,
    });
  };

  const handleSubmit = () => {
    const newErrors = {};

    // Validate that each question has an answer
    testQuestions[selectedTest].forEach((_, index) => {
      if (!answers[index]) {
        newErrors[index] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please answer all the questions.");
    } else {
      toast.success("Form Submitted!");
      closeModal();
    }
  };

  const renderForm = (test) => {
    if (!test) return null;

    return (
      <div className="form">
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >{`${test.charAt(0).toUpperCase() + test.slice(1)} Test`}</h2>
        {testQuestions[test].map((question, index) => (
          <div key={index} className="form-group">
            <label>{question}</label>
            <div className="options">
              {options.map((option, i) => (
                <div key={i}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    id={`question-${index}-${option}`}
                    checked={answers[index] === option}
                    onChange={() => handleAnswerChange(index, option)}
                  />
                  <label htmlFor={`question-${index}-${option}`}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
            {errors[index] && (
              <p style={{ color: "red", fontSize: "12px" }}>
                Please answer this question.
              </p>
            )}
          </div>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    );
  };

  return (
    <section className="toolkit">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover={false}
      />

      <h1>Personalized Tests</h1>
      <p>
        Pinpoint areas of your mental health that need attention by taking our
        free tests.
      </p>
      <div className="toolkit-cards">
        {Object.keys(testQuestions).map((test) => (
          <div className="card" key={test}>
            <h3>{`${test.charAt(0).toUpperCase() + test.slice(1)} Test`}</h3>
            <p>{`Identify signs of ${test} and understand its impact on your well-being.`}</p>
            <button onClick={() => openModal(test)}>Take the Test</button>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {renderForm(selectedTest)}
          </div>
        </div>
      )}
    </section>
  );
};

export default Toolkit;
