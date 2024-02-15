import React from "react";
const PassingScores = () => {
  return (
    <div>
      <h1>Проходные баллы прошлых лет</h1>
      <table className="passingScores-table">
        <thead>
          <tr>
            <th>Специальность</th> <th>2021г.</th> <th>2022г.</th>{" "}
            <th>2023г</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>26.02.03 «Судовождение» (углубленная подготовка)</td>{" "}
            <td>4,1</td> <td>4,30</td> <td>4,39</td>
          </tr>
          <tr>
            <td>
              26.02.06 «Эксплуатация судового электрооборудования и средств
              автоматики»
            </td>{" "}
            <td>3,94</td> <td>3,89</td> <td>4,03</td>
          </tr>
          <tr>
            <td>26.02.05 «Эксплуатация судовых энергетических установок»</td>{" "}
            <td>3,80</td> <td>3,70</td> <td>3,83</td>
          </tr>
          <tr>
            <td>
              23.02.01 «Организация перевозок и управление на транспорте (по
              видам)»
            </td>{" "}
            <td>4,40</td> <td>4,24</td> <td>4,31</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default PassingScores;
