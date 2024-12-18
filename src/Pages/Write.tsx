import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import { z } from "zod";

export default function Write() {
  const FormData = z.object({
    name: z.string(),
    email: z.string().email({ message: "Invalid email address!" }),
    title: z.string(),
    category: z.string(),
    entry: z.string(),
    mood: z.string(),
    date: z.string(),
  });

  type formdata = z.infer<typeof FormData>;

  const [formData, setFormData] = useState<formdata>({
    name: "",
    email: "",
    title: "",
    category: "Grateful",
    entry: "",
    mood: "",
    date: "",
  });

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpen2(false);
  };

  const handleSubmit = (e: FormEvent) => {
    const newMood: string = sessionStorage.getItem("Mood") || "";
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm: number = today.getMonth() + 1;
    let dd: number = today.getDate();
    const formattedToday = dd + "/" + mm + "/" + yyyy;
    setFormData((prev) => ({
      ...prev,
      mood: newMood,
      date: formattedToday,
    }));
    // console.log(formData);
    e.preventDefault();
  };

  useEffect(() => {
    if (formData.mood && formData.date) {
      // console.log("Inside if!");
      // console.log('Updated formData:', formData);
      const parsedData = FormData.safeParse(formData);
      if (!parsedData.success) {
        console.log("Error: ", parsedData.error);
        setOpen2(true);
      } else {
        const storedData: formdata[] = JSON.parse(
          localStorage.getItem("formData") || "[]"
        );
        storedData.push(parsedData.data);
        localStorage.setItem("formData", JSON.stringify(storedData));
        setOpen(true);
      }
      setFormData({
        name: "",
        email: "",
        title: "",
        category: "Grateful",
        entry: "",
        mood: "",
        date: "",
      });
    }
  }, [formData, FormData]);
  return (
    <>
      <Header />
      <div className="flex items-center justify-center p-3 md:p-10 sm:p-7">
        <form className="flex flex-col items-center justify-center space-y-5 p-20 w-[50%] bg-slate-100 rounded-lg shadow-lg md:p-10 sm:p-5 sm:w-full md:w-full">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-3 bg-white rounded-md"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleFormChange}
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="w-full p-3 bg-white rounded-md"
            value={formData.email}
            onChange={handleFormChange}
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Enter Title"
            className="w-full p-3 bg-white rounded-md"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleFormChange}
            autoComplete="off"
          />
          <div className="w-full p-3">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleFormChange}
              className="ml-2 p-2 bg-white rounded-md"
            >
              <option value="Grateful">Grateful</option>
              <option value="Stressful">Stressful</option>
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Anxious">Anxious</option>
              <option value="Excited">Excited</option>
              <option value="Motivated">Motivated</option>
              <option value="Lonely">Lonely</option>
              <option value="Empowered">Empowered</option>
              <option value="Overwhelmed">Overwhelmed</option>
              <option value="Tired">Tired</option>
              <option value="Confused">Confused</option>
            </select>
          </div>
          <textarea
            id="entry"
            name="entry"
            value={formData.entry}
            onChange={handleFormChange}
            placeholder="Write about your day..."
            className="w-full p-3 bg-white rounded-md"
            rows={13}
          />

          <button
            onClick={handleSubmit}
            className="p-3 bg-blue-200 rounded-md hover:bg-blue-300 transition-all border border-white"
          >
            Save Entry
          </button>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Your entry was successful in the journal!
            </Alert>
          </Snackbar>
          <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="warning"
              variant="filled"
              sx={{ width: "100%" }}
            >
              There was an error in your entry! Please try again.
            </Alert>
          </Snackbar>
        </form>
      </div>
      <Footer />
    </>
  );
}
