import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Switch, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { NewsStore } from "../../../store/news-store";
const EditorNewsPage = observer(() => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { createNews, isCreateNewsLoading, errorOfCreateingNews } = NewsStore;
  const editorRef = useRef(null);
  const [text, setText] = useState("");
  const [main, setMain] = useState(false);
  const [mainDisabled, setMainDisabled] = useState(false);

  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    file: file,
    page: "STUDENT_LIFE",
    main: main,
    /*   title: "", */
    card: "",
    /*    author: "", */
    date: "01.02.23",
    text: text,
  });
  useEffect(() => {
    if (data.card !== "") {
      setMain(false);
      setMainDisabled(true);
    }
    if (data.card === "") {
      setMainDisabled(false);
    }
    if (main === true) {
      setData((prevState) => ({ ...prevState, card: "" }));
    }
  }, [data.card, main]);
  useEffect(() => {
    setData((p) => ({ ...p, main, file, text }));
  }, [main, file, text]);
  const handleSwitchChange = () => {
    setMain(() => !main);
  };
  const handlePageChange = (e) => {
    setData((p) => ({ ...p, page: e }));
  };
  const handleCardChange = (e) => {
    setData((p) => ({ ...p, card: e }));
  };

  function handleChange(e) {
    setData((p) => ({ ...p, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    /*   e.preventDefault(); */
    /* console.log({ ...data, text }); */
    addNews();
  }

  function onNavigate(data) {
    if (data.page === "STUDENT_LIFE") {
      navigate("../../live/studentsLive");
    } else if (data.page === "STUDENT_SPORT") {
      navigate("../../live/sport");
    } else if (data.page === "STUDENT_SCIENCE") {
      navigate("../../live/science");
    } else if (data.page === "STUDENT_PRIDE") {
      navigate("../../live/ourPride");
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const addNews = () => {
    const formData = new FormData();
    formData.append("title", `${form.getFieldValue("title")}`);
    formData.append("text", `${data.text}`);
    formData.append("image", data.file);
    formData.append("author", `${form.getFieldValue("author")}`);
    formData.append("card", `${data.card}`);
    formData.append("page", `${data.page}`);
    formData.append("main", `${data.main}`);
    formData.append("date", `${data.date}`);
    form
      .validateFields()
      .then(() => {
        createNews(formData, onNavigate);
      })
      .catch((e) => {
        console.log("err", e);
      });
  };

  return (
    <section className="editor-news-page_wrapper margin-top-bg ">
      <Form
        form={form}
        name="basic"
        initialValues={{
          page: data.page,
        }}
        onChange={handleChange}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* Выбор страницы */}
        <Form.Item label="Страница" name="page" rules={[{ required: true }]}>
          <Select
            style={{ width: 300 }}
            options={[
              { value: "STUDENT_LIFE", label: "Студенческая жизнь" },
              { value: "STUDENT_SPORT", label: "Спорт" },
              { value: "STUDENT_PRIDE", label: "Наша гордость" },
              { value: "STUDENT_SCIENCE", label: "Наука" },
            ]}
            onChange={handlePageChange}
          />
        </Form.Item>
        {/* Главная новость! */}
        <Form.Item name="main" label="Главная новость" valuePropName="checked">
          <Switch disabled={mainDisabled} onChange={handleSwitchChange} />
        </Form.Item>
        {/* Выбор карточки */}
        <Form.Item name="card" label="Выберите карточку">
          <Select
            disabled={main}
            style={{ width: 300 }}
            onChange={handleCardChange}
            options={[
              { value: "", label: "" },
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: "6", label: "6" },
            ]}
          />
        </Form.Item>
        {/* Заголовок */}
        <Form.Item
          name="title"
          label="Название новости"
          rules={[
            {
              required: true,
              message: "Введите название новости!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* Автор */}
        <Form.Item
          name="author"
          label="Автор новости"
          rules={[
            {
              required: true,
              message: "Укажите Ваше имя и фамилию!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="file"
          rules={[
            {
              required: true,
              message: "Прикрепите изображение!",
            },
          ]}
          onChange={(e) => setFile(e.target.files[0])}
        >
          <Upload
            accept="image/jpeg,image/jpg,image/png,image/gif"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Добавить изображение</Button>
          </Upload>
        </Form.Item>
        {/* Редактор текста */}
        <Editor
          name="text"
          apiKey="zd2ikpvwav8hhbalfmc0ksg1w0wj5chfei2uer8esvxyf40t"
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            height: 500,
            width: "100%",
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",

              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | autolink | link |" +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat |",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onChange={(e) => setText(e.level.content)}
        />
        <hr />
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Добавить новость
          </Button>
          <span>{isCreateNewsLoading && "Загрузка"}</span>
          <span>
            {errorOfCreateingNews && "Произошла ошибка, попробуйте позже!"}
          </span>
        </Form.Item>
      </Form>
    </section>
  );
});
export default EditorNewsPage;
