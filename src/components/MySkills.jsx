export default function MySkills() {
  const datas = [
    "React JS",
    "Node JS",
    "Express",
    "Next JS",
    "Tailwind CSS",
    "Redux",
    "Formik",
    "Yup",
    "REST API",
    "Multer",
    "Google OAuth",
    "JsonWebToken",
    "Nodemailer",
    "MySQL",
    "Docker",
  ];

  return (
    <div className="flex gap-4 flex-wrap color-text-blue ">
      {datas.map((data, index) => (
        <p key={index} className="px-2 bg-slate-800 rounded-lg">
          {data}
        </p>
      ))}
    </div>
  );
}

