import * as React from 'react';
import { Box } from '@mui/material';

export default function ListOrder() {

  return (
    <Box>
      <ol className="olcards">
        <li>
          <div className="content">
            <div className="icon">🏕</div>
            <div className="title">
              Mẫu mã đa dạng</div>
            <div className="text">Giá cả cạnh tranh.</div>
          </div>
        </li>
        <li>
          <div className="content">
            <div className="icon">🎯</div>
            <div className="title">Sản phẩm chất lượng cao</div>
            <div className="text">Khách hài lòng mới thanh toán.</div>
          </div>
        </li>
        <li>
          <div className="content">
            <div className="icon">😍</div>
            <div className="title">Phục vụ nhiệt tình</div>
            <div className="text">Thi công tận nơi nhanh chóng</div>
          </div>
        </li>
        <li>
          <div className="content">
            <div className="icon">📞</div>
            <div className="title">
              HOTLINE: 0961576312</div>
            <div className="text">Tư vấn hỗ trợ 24/7</div>
          </div>
        </li>
      </ol>
    </Box>
  );
}
