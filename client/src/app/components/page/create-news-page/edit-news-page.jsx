import React, { useEffect, useState } from "react";
/* import { Editor } from "@tinymce/tinymce-react"; */
import { Input } from "antd";

import { fetchOneNews } from "../../../httpService/newsApi";
import { useParams } from "react-router";
/* import { Context } from "../../../../index"; */
import { observer } from "mobx-react-lite";
import EducationContainer from "../../common/educationContainer/education-container";
import { useForm } from "antd/es/form/Form";
const EditNewsPage = observer(() => {
  const { id } = useParams();
  const [oneNews, setOneNews] = useState({});

  useEffect(() => {
    fetchOneNews(id).then((data) => setOneNews(data));
  }, []);
  useEffect(() => {
    setTitle(oneNews.title);
  }, [oneNews]);
  /*   const [page, setPage] = useState("STUDENT_SPORT"); */
  /*   const [page, setPage] = useState(oneNews.page); */

  /*   const [title, setTitle] = useState("Новость"); */
  const [title, setTitle] = useState("");
  console.log(oneNews.title);

  const [form] = useForm();
  const oneNewKeys = Object.keys(oneNews);
  useEffect(() => {
    form.resetFields();
    form.setFieldsValue({ title: oneNews.title });
  }, [title]);
  /*   useEffect(() => {
     setPage(oneNews.page);
    setTitle(oneNews.title); 

      form.resetFields(); 
    form.setFieldsValue({ page: page, title: title });
  }, [id, form, oneNews, oneNewKeys, page, title]); */

  /*   const [main, setMain] = useState(false); */
  /*   const [file, setFile] = useState(null);

  const [text, setText] = useState("");
  const [card, setCard] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("01.02.23"); */

  /*   const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  }; */

  return (
    <EducationContainer>
      {" "}
      {oneNewKeys.length !== 0 ? (
        <section className="editor-news-page_wrapper">
          {/*  <Form.Item
              label="Страница"
              name="page"
              rules={[{ required: true }]}
            >
              <Select
                style={{ width: 300 }}
                options={[
                  { value: "STUDENT_LIFE", label: "Студенческая жизнь" },
                  { value: "STUDENT_SPORT", label: "Спорт" },
                  { value: "STUDENT_PRIDE", label: "Наша гордость" },
                  { value: "STUDENT_SCIENCE", label: "Наука" },
                ]}
                onChange={(e) => setPage(e)}
              />
            </Form.Item> */}

          {/*   <Form.Item
              label="Главная новость"
              name="main"
              valuePropName="checked"
            >
              <Checkbox onChange={(e) => setMain(e.target.checked)} />
            </Form.Item> */}

          {/*  <Form.Item label="Выберите карточку" name="card">
              <Select
                style={{ width: 300 }}
                options={[
                  { value: "", label: "" },
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                  { value: "6", label: "6" },
                ]}
                onChange={(e) => setCard(e)}
              />
            </Form.Item>
 */}
          {/*        <Form.Item
              label="Название новости"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Введите название новости!",
                },
              ]}
            > */}
          <Input onChange={(e) => setTitle(e.target.value)} value={title} />
          {/*  </Form.Item> */}

          {/*  <Form.Item
              label="Автор новости"
              name="author"
              rules={[
                {
                  required: true,
                  message: "Укажите Ваше имя и фамилию!",
                },
              ]}
            >
              <Input onChange={(e) => setAuthor(e.target.value)} />
            </Form.Item>
            <Form.Item
              name="image"
              onChange={(e) => setFile(e.target.files[0])}
            >
              <Upload maxCount={1}>
                {" "}
                <Button icon={<UploadOutlined />}>Добавить изображение</Button>
              </Upload>
            </Form.Item>

            <Editor
              apiKey="zd2ikpvwav8hhbalfmc0ksg1w0wj5chfei2uer8esvxyf40t"
              onInit={(evt, editor) => (editorRef.current = editor)}
              init={{
                height: 500,
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
              <Button type="primary" htmlType="submit" onClick={"addNews"}>
                Добавить новость
              </Button>
            </Form.Item> */}
        </section>
      ) : (
        "Загрузка..."
      )}
    </EducationContainer>
  );
});
export default EditNewsPage;
