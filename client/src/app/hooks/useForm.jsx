import { useRef, useState } from "react";

export function useForm(values) {
  const [data, setData] = useState(values);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleReset = () => {
    for (let key in values) {
      setData((prevState) => ({
        ...prevState,
        [key]: "",
      }));
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    user.login(data, navigate);
    navigate("auth");
    if (!user.isLoading) formRef.current.reset();
  };

  return;
}
