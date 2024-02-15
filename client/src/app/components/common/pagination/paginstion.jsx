import React from "react";
import { ConfigProvider, Pagination } from "antd";
import { observer } from "mobx-react-lite";
import fontSize from "../../../store/fontSize";
import { toggleClassName, toggleIconColor } from "../../../utils/disabled";
const PaginationComponent = observer(
  ({ pageSize, currentPage, setCurrentPage, news }) => {
    const handlePageChange = (pageIndex) => {
      setCurrentPage(pageIndex);
    };

    const togglePaginationSize = () => {
      const size = fontSize.fontSize;

      if (size === "normal") return 40;
      if (size === "medium") return 45;
      if (size === "large") return 60;
      else {
        return 32;
      }
    };

    return (
      <>
        <div className="paginate-wrapper">
          <ConfigProvider
            theme={{
              components: {
                Pagination: {
                  itemSize: togglePaginationSize(),
                  itemActiveBg: toggleIconColor(
                    "white",
                    "white",
                    "000",
                    "#9dd1ff"
                  ),
                  itemBg: toggleIconColor("white", "white", "000", "#9dd1ff"),
                },
              },
            }}
          >
            <Pagination
              pageSize={pageSize}
              total={news.length}
              current={currentPage}
              showSizeChanger={false}
              onChange={(page) => handlePageChange(page)}
              style={{
                color: toggleClassName("#0C1C2B", "black", "white", "#195183"),
              }}
            />
          </ConfigProvider>
        </div>
      </>
    );
  }
);
export default PaginationComponent;
