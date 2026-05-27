# Khung Level Vị Trí QA Tester R&D Lumi

Tài liệu này áp dụng khung phát triển nghề nghiệp vào team QA Tester trong R&D Lumi. Đây là tài liệu định hướng năng lực, không phải khung lương hoặc tiêu chí đánh giá nhân sự chính thức.

## 1. Tổng quan vai trò

Team QA Tester kiểm soát chất lượng sản phẩm Lumi trên cả phần cứng, firmware, software, backend, app và luồng tích hợp toàn hệ thống. QA giúp đảm bảo sản phẩm không chỉ đúng yêu cầu, mà còn ổn định, tin cậy, dễ sử dụng và sẵn sàng cho người dùng thực tế.

Thành công của vị trí QA được đo bằng khả năng phát hiện rủi ro sớm, thiết kế kịch bản kiểm thử sát thực tế, mô tả lỗi rõ, xác nhận sửa lỗi chặt chẽ và cung cấp thông tin chất lượng đủ tin cậy cho quyết định phát hành.

## 2. Phạm vi công việc chính

| Nhóm việc | Nội dung |
|---|---|
| Kiểm thử sản phẩm | Kiểm thử phần cứng, firmware, software, backend, app và trải nghiệm tích hợp. |
| Test case và test plan | Xây dựng kịch bản kiểm thử theo yêu cầu, luồng sử dụng, trạng thái hệ thống và điều kiện thực tế. |
| Quản lý lỗi | Ghi nhận lỗi, tái hiện, phân loại mức độ, theo dõi xử lý và xác nhận sau sửa. |
| Đánh giá chất lượng | Kiểm tra ổn định, kết nối, hiệu năng, trải nghiệm, độ tin cậy và khuyến nghị phát hành. |

## 3. Đầu vào và đầu ra

| Đầu vào | Đầu ra |
|---|---|
| Yêu cầu sản phẩm, bản thiết kế, phần cứng mẫu, firmware, software, app, tài liệu kỹ thuật và tiêu chí nghiệm thu. | Test case, test report, bug report, kết quả xác nhận lỗi, đánh giá chất lượng, đánh giá độ ổn định và khuyến nghị phát hành. |

## 4. Bản đồ level nghề nghiệp

```text
Junior QA Tester
  -> Middle QA Tester
      -> Senior QA Tester
          -> Lead QA hoặc QA Specialist
```

Lead QA tập trung vào chiến lược kiểm thử, phân công, chất lượng release và phát triển năng lực QA trong team. QA Specialist tập trung vào chuyên sâu như automation, performance, reliability, hardware test hoặc system integration test.

## 5. So sánh level

| Chiều so sánh | Junior | Middle | Senior | Lead/Specialist |
|---|---|---|---|---|
| Phạm vi ảnh hưởng | Test case rõ, bug cụ thể | Feature hoặc module | Luồng tích hợp/sản phẩm quan trọng | Chiến lược test, chất lượng release, nhiều team/sản phẩm |
| Mức tự chủ | Cần test plan rõ | Tự thiết kế case trong phạm vi vừa | Làm rõ rủi ro, coverage, ưu tiên test | Định hướng test strategy và chuẩn chất lượng |
| Chất lượng đầu ra | Bug report rõ bước cơ bản | Test case đủ flow chính và lỗi phổ biến | Test plan có risk, edge case, regression, impact | Dashboard/report/chỉ báo chất lượng giúp ra quyết định |
| Phối hợp | Báo lỗi cho dev/lead | Phối hợp với dev, BA, PM | Chủ động làm rõ acceptance criteria và release risk | Gỡ lệch hiểu giữa BA, PM, kỹ thuật và QA |
| Vận hành | Test theo hướng dẫn | Tái hiện và xác nhận lỗi ổn | Nhìn được lỗi môi trường, dữ liệu, version, tích hợp | Xây quy trình regression, smoke, release gate |

## 6. Năng lực cốt lõi

| Nhóm năng lực | Junior | Middle | Senior | Lead/Specialist |
|---|---|---|---|---|
| Chuyên môn | Chạy test case, ghi bug rõ | Thiết kế test case cho feature | Test theo rủi ro, integration, regression | Test strategy, automation hoặc chuyên sâu hệ thống |
| Ownership và mơ hồ | Cần yêu cầu rõ | Tự hỏi khi thiếu tiêu chí | Làm rõ acceptance criteria, impact, priority | Dẫn dắt tiêu chuẩn chất lượng và quyết định release |
| Phối hợp liên team | Báo lỗi đúng người | Theo dõi bug tới khi đóng | Chủ động đồng bộ BA, PM, dev, firmware, app | Điều phối chất lượng xuyên nhiều team |
| Chất lượng và rủi ro | Kiểm tra happy path | Kiểm tra lỗi phổ biến | Dự báo rủi ro thực tế, regression, tích hợp | Đặt release gate và hệ thống đo chất lượng |
| Tài liệu | Bug report cơ bản | Test case/report rõ | Test plan, risk list, release note QA | Template, checklist, dashboard, knowledge base |

## 7. Dấu hiệu nhận biết

| Level | Dấu hiệu tích cực | Dấu hiệu chưa tới |
|---|---|---|
| Junior | Chạy test cẩn thận, ghi bug có bước tái hiện, hỏi khi thiếu thông tin | Báo lỗi mơ hồ, thiếu version/môi trường, chỉ test happy path |
| Middle | Tự thiết kế case cho feature, phối hợp tốt với dev/BA | Coverage chưa rõ, ít test edge case hoặc regression |
| Senior | Nhìn được rủi ro release, làm rõ yêu cầu, ưu tiên test theo impact | Chỉ tìm bug cuối quy trình, chưa tham gia sớm vào yêu cầu |
| Lead/Specialist | Chất lượng release rõ hơn, team có checklist và chiến lược test ổn định | QA trở thành bước chặn cuối nhưng không giúp team phòng lỗi sớm |

## 8. Muốn lên level tiếp theo cần chứng minh gì

| Từ | Lên | Cần chứng minh |
|---|---|---|
| Junior | Middle | Tự chạy và cập nhật test case cho feature nhỏ, bug report rõ và xác nhận lỗi tốt. |
| Middle | Senior | Làm chủ test plan cho feature/sản phẩm quan trọng, coverage và rủi ro release rõ. |
| Senior | Lead/Specialist | Tạo chiến lược test, checklist, automation hoặc chuẩn QA giúp nhiều release ít lỗi hơn. |

## 9. Lỗi phổ biến khiến bị kẹt level

| Lỗi | Cách sửa |
|---|---|
| Chỉ kiểm thử theo checklist có sẵn | Hiểu mục tiêu sản phẩm, luồng người dùng, trạng thái lỗi và rủi ro tích hợp. |
| Bug report thiếu thông tin | Luôn ghi version, môi trường, bước tái hiện, kết quả thực tế, kết quả mong muốn và bằng chứng. |
| QA tham gia quá muộn | Tham gia từ giai đoạn yêu cầu để làm rõ acceptance criteria và rủi ro test. |

## 10. Checklist tự đánh giá

| Câu hỏi | Chưa có | Đang hình thành | Ổn định | Vượt kỳ vọng |
|---|---:|---:|---:|---:|
| Tôi có hiểu mục tiêu sản phẩm và tiêu chí nghiệm thu trước khi test không? |  |  |  |  |
| Bug report của tôi có đủ thông tin để tái hiện và xử lý không? |  |  |  |  |
| Tôi có kiểm tra edge case, regression và rủi ro tích hợp không? |  |  |  |  |
| Tôi có báo rủi ro chất lượng đủ sớm cho PM/BA/dev không? |  |  |  |  |
| Tôi có tạo checklist, template hoặc automation giúp QA tốt hơn không? |  |  |  |  |
