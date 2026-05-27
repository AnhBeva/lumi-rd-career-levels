# Khung Level Vị Trí Thiết Kế Phần Cứng R&D Lumi

Tài liệu này áp dụng khung phát triển nghề nghiệp vào team Thiết kế Phần cứng trong R&D Lumi. Đây là tài liệu định hướng năng lực, không phải khung lương hoặc tiêu chí đánh giá nhân sự chính thức.

## 1. Tổng quan vai trò

Team Thiết kế Phần cứng tạo nền tảng điện tử cho các thiết bị Lumi: công tắc, cảm biến, Hub, Home Controller, AIH, module kết nối và các thiết bị IoT khác. Vai trò này biến yêu cầu sản phẩm thành mạch điện tử có thể sản xuất, bring-up, kiểm thử và tích hợp với firmware, cơ khí, app, software và cloud.

Thành công của vị trí này được đo bằng phần cứng ổn định, đúng chức năng, phù hợp chi phí, kích thước, nguồn, kết nối, an toàn và khả năng sản xuất.

## 2. Phạm vi công việc chính

| Nhóm việc | Nội dung |
|---|---|
| Thiết kế mạch | Sơ đồ nguyên lý, lựa chọn linh kiện, nguồn, MCU/module, cảm biến, giao tiếp và bảo vệ mạch. |
| Layout PCB | Bố trí linh kiện, routing, anten, nguồn, tín hiệu, nhiệt, EMC/ESD và ràng buộc cơ khí. |
| Bring-up và kiểm thử | Phối hợp firmware để kiểm tra phần cứng mẫu, đo đạc, debug và xác nhận chức năng. |
| Sản xuất | Chuẩn bị BOM, dữ liệu sản xuất, hỗ trợ mẫu thử, xử lý lỗi và tối ưu cho sản xuất hàng loạt. |

## 3. Đầu vào và đầu ra

| Đầu vào | Đầu ra |
|---|---|
| Yêu cầu chức năng sản phẩm, yêu cầu kết nối, yêu cầu nguồn, yêu cầu kích thước, yêu cầu chi phí và ràng buộc cơ khí. | Sơ đồ nguyên lý, layout PCB, BOM linh kiện, mẫu phần cứng, tài liệu kiểm tra phần cứng và hỗ trợ bring-up. |

## 4. Bản đồ level nghề nghiệp

```text
Junior Hardware Engineer
  -> Middle Hardware Engineer
      -> Senior Hardware Engineer
          -> Staff Hardware Engineer hoặc Lead Hardware Engineer
```

Staff Hardware Engineer tập trung vào chuẩn thiết kế, nền tảng phần cứng, lựa chọn công nghệ và giảm rủi ro xuyên nhiều sản phẩm. Lead Hardware Engineer tập trung vào hướng kỹ thuật, review và phối hợp delivery phần cứng trong team/dự án.

## 5. So sánh level

| Chiều so sánh | Junior | Middle | Senior | Staff/Lead |
|---|---|---|---|---|
| Phạm vi ảnh hưởng | Một khối mạch hoặc sửa lỗi rõ | Một board/module vừa | Một sản phẩm phần cứng end-to-end | Nhiều board, platform hoặc chuẩn phần cứng |
| Mức tự chủ | Cần hướng dẫn thiết kế và review kỹ | Tự thiết kế phần quen thuộc | Làm rõ yêu cầu, trade-off và rủi ro | Định hướng kiến trúc phần cứng và chuẩn dùng lại |
| Chất lượng đầu ra | Mạch đúng yêu cầu cơ bản | Board hoạt động, dễ bring-up | Board ổn định, có xét sản xuất, chi phí, nhiễu, nhiệt | Giảm rủi ro nền tảng và lỗi lặp lại cho nhiều dự án |
| Phối hợp | Nhận input từ firmware/cơ khí | Phối hợp bring-up và bố trí cơ khí | Chủ động đồng bộ firmware, cơ khí, QA, sản xuất | Gỡ quyết định khó giữa phần cứng, sản xuất, chi phí |
| Tài liệu | Note kỹ thuật cơ bản | BOM và hướng dẫn test đủ dùng | Tài liệu bring-up, test, rủi ro và quyết định rõ | Checklist, guideline, reference design, chuẩn linh kiện |

## 6. Năng lực cốt lõi

| Nhóm năng lực | Junior | Middle | Senior | Staff/Lead |
|---|---|---|---|---|
| Chuyên môn | Hiểu khối mạch cơ bản | Thiết kế board/module quen thuộc | Thiết kế sản phẩm có xét nguồn, tín hiệu, RF, nhiệt, EMC | Định hình platform, chuẩn linh kiện và reference design |
| Ownership và mơ hồ | Cần yêu cầu rõ | Tự làm rõ thông số trong phạm vi | Biến yêu cầu sản phẩm thành phương án phần cứng khả thi | Dẫn dắt quyết định khó và quản trị rủi ro lớn |
| Phối hợp liên team | Hỗ trợ kiểm tra phần mình | Làm việc tốt với firmware/cơ khí | Kéo các team chốt interface và test plan | Tạo cơ chế review phần cứng liên team |
| Chất lượng và rủi ro | Kiểm tra lỗi rõ | Nhận biết rủi ro phổ biến | Chủ động dự báo lỗi sản xuất, nhiệt, nhiễu, nguồn | Đặt chuẩn chất lượng và chiến lược giảm lỗi |
| Tài liệu | Ghi chú đơn giản | BOM/schematic/layout rõ | Handoff đủ cho bring-up, QA và sản xuất | Guideline, checklist, quyết định linh kiện/platform |

## 7. Dấu hiệu nhận biết

| Level | Dấu hiệu tích cực | Dấu hiệu chưa tới |
|---|---|---|
| Junior | Làm đúng khối mạch nhỏ, hỏi sớm, học nhanh từ review | Copy reference nhưng chưa hiểu điều kiện áp dụng |
| Middle | Tự thiết kế board vừa, debug được lỗi phổ biến | Ít nhìn rủi ro sản xuất hoặc phối hợp muộn với firmware/cơ khí |
| Senior | Làm chủ phần cứng sản phẩm, rủi ro rõ, bring-up có kế hoạch | Chỉ tối ưu mạch mà chưa cân bằng chi phí, sản xuất, vận hành |
| Staff/Lead | Tạo chuẩn dùng lại, giảm lỗi nền tảng, nâng chất lượng review | Trở thành người sửa lỗi cuối cùng thay vì xây hệ thống phòng lỗi |

## 8. Muốn lên level tiếp theo cần chứng minh gì

| Từ | Lên | Cần chứng minh |
|---|---|---|
| Junior | Middle | Tự hoàn thành một khối mạch hoặc chỉnh sửa board có kiểm tra rõ. |
| Middle | Senior | Làm chủ một board/module từ yêu cầu đến bring-up và test ổn định. |
| Senior | Staff/Lead | Tạo reference design, checklist hoặc chuẩn linh kiện giúp nhiều sản phẩm tốt hơn. |

## 9. Lỗi phổ biến khiến bị kẹt level

| Lỗi | Cách sửa |
|---|---|
| Chỉ kiểm tra mạch ở điều kiện lab | Kiểm tra nguồn, nhiệt, nhiễu, kết nối, sai số linh kiện và điều kiện thực tế. |
| Chốt layout trước khi đồng bộ cơ khí/firmware | Review sớm interface, pinout, connector, anten, không gian và test point. |
| Thiếu tài liệu bring-up và test | Ghi rõ quy trình đo, kỳ vọng, lỗi đã biết, workaround và điều kiện pass/fail. |

## 10. Checklist tự đánh giá

| Câu hỏi | Chưa có | Đang hình thành | Ổn định | Vượt kỳ vọng |
|---|---:|---:|---:|---:|
| Tôi có hiểu rõ yêu cầu nguồn, kết nối, kích thước, chi phí và sản xuất không? |  |  |  |  |
| Board của tôi có đủ test point, tài liệu bring-up và tiêu chí kiểm tra không? |  |  |  |  |
| Tôi có dự báo rủi ro nhiệt, nhiễu, RF, linh kiện và sản xuất không? |  |  |  |  |
| Tôi có phối hợp sớm với firmware, cơ khí và QA không? |  |  |  |  |
| Tôi có tạo chuẩn hoặc reference giúp dự án sau nhanh hơn không? |  |  |  |  |
