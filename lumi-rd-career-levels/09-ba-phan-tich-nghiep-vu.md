# Khung Level Vị Trí BA - Phân Tích Nghiệp Vụ R&D Lumi

Tài liệu này áp dụng khung phát triển nghề nghiệp vào vị trí BA trong R&D Lumi. Đây là tài liệu định hướng năng lực, không phải khung lương hoặc tiêu chí đánh giá nhân sự chính thức.

## 1. Tổng quan vai trò

BA làm rõ bài toán, thu thập yêu cầu, phân tích nhu cầu người dùng/vận hành và chuyển hóa thành yêu cầu đủ rõ để Thiết kế, kỹ thuật, QA và PM triển khai. Trong bối cảnh Lumi, BA cần hiểu sản phẩm như một hệ sinh thái gồm thiết bị, firmware, bộ điều khiển trung tâm, cloud/backend, app và trải nghiệm người dùng.

Thành công của BA được đo bằng yêu cầu rõ, đúng mục tiêu, có tiêu chí nghiệm thu, ít hiểu sai, ít thiếu case quan trọng và giúp team triển khai đúng thứ cần làm.

## 2. Phạm vi công việc chính

| Nhóm việc | Nội dung |
|---|---|
| Thu thập yêu cầu | Làm việc với stakeholder, người dùng, vận hành, kỹ thuật và dữ liệu phản hồi thực tế. |
| Phân tích nghiệp vụ | Làm rõ bài toán, luồng sử dụng, persona, trạng thái hệ thống, quy tắc xử lý và ngoại lệ. |
| Đặc tả yêu cầu | Viết tài liệu yêu cầu, user story, use case, acceptance criteria và logic sản phẩm. |
| Phối hợp triển khai | Đồng bộ với Thiết kế, PM, kỹ thuật và QA để yêu cầu có thể thiết kế, build, test và vận hành. |

## 3. Đầu vào và đầu ra

| Đầu vào | Đầu ra |
|---|---|
| Ý tưởng sản phẩm, yêu cầu kinh doanh, nhu cầu người dùng, phản hồi khách hàng, yêu cầu vận hành, bối cảnh thị trường và ràng buộc kỹ thuật ban đầu. | Tài liệu yêu cầu nghiệp vụ, yêu cầu chức năng, user story, use case, luồng xử lý, acceptance criteria, quy tắc nghiệp vụ và các điểm cần làm rõ cho thiết kế, kỹ thuật và QA. |

## 4. Bản đồ level nghề nghiệp

```text
Junior BA
  -> Middle BA
      -> Senior BA
          -> Lead BA hoặc Product/System Analyst
```

Lead BA tập trung vào chuẩn phân tích, chất lượng yêu cầu và phát triển năng lực BA trong team. Product/System Analyst tập trung vào bài toán rộng hơn: mô hình sản phẩm, hệ thống, dữ liệu, vận hành và tác động liên team.

## 5. So sánh level

| Chiều so sánh | Junior | Middle | Senior | Lead/Product-System Analyst |
|---|---|---|---|---|
| Phạm vi ảnh hưởng | Màn hình, flow nhỏ, phần yêu cầu rõ | Feature hoặc module | Luồng sản phẩm quan trọng end-to-end | Nhiều feature, domain sản phẩm hoặc chuẩn yêu cầu |
| Mức tự chủ | Cần hướng dẫn cách hỏi/viết | Tự làm rõ phần quen thuộc | Làm rõ bài toán mơ hồ, rủi ro, trade-off | Định hướng discovery và chuẩn phân tích |
| Chất lượng đầu ra | Tài liệu đúng format | User story/use case rõ flow chính | Yêu cầu có edge case, acceptance criteria, impact | Tạo template, glossary, rule model, chuẩn yêu cầu dùng lại |
| Phối hợp | Nhận input và ghi lại | Làm việc với design/dev/QA trong phạm vi | Chủ động đồng bộ stakeholder và kỹ thuật | Gỡ lệch hiểu giữa business, sản phẩm, kỹ thuật, QA |
| Rủi ro | Nhận biết thiếu thông tin rõ | Hỏi thêm khi có mâu thuẫn | Dự báo hiểu sai, thiếu case, lệch mục tiêu | Giảm rủi ro yêu cầu ở nhiều dự án/sản phẩm |

## 6. Năng lực cốt lõi

| Nhóm năng lực | Junior | Middle | Senior | Lead/Product-System Analyst |
|---|---|---|---|---|
| Chuyên môn | Ghi nhận yêu cầu, viết user story cơ bản | Phân tích flow, use case, acceptance criteria | Phân tích domain, trạng thái, edge case, impact | Chuẩn hóa discovery, rule, glossary, product model |
| Ownership và mơ hồ | Cần bài toán rõ | Tự hỏi khi thiếu thông tin | Biến ý tưởng mơ hồ thành yêu cầu khả thi | Dẫn dắt làm rõ bài toán lớn và quyết định phạm vi |
| Phối hợp liên team | Chuyển thông tin | Đồng bộ design/dev/QA | Kéo stakeholder thống nhất mục tiêu và tiêu chí nghiệm thu | Tạo ngôn ngữ chung giữa business và kỹ thuật |
| Chất lượng và rủi ro | Kiểm tra format | Kiểm tra flow chính | Kiểm tra ngoại lệ, conflict, dependency, vận hành | Đặt chuẩn chất lượng yêu cầu và phòng lỗi hiểu sai |
| Tài liệu | BRD/user story đơn giản | Use case/AC rõ | Spec đủ cho thiết kế, build, test | Template, glossary, decision log, change log |

## 7. Dấu hiệu nhận biết

| Level | Dấu hiệu tích cực | Dấu hiệu chưa tới |
|---|---|---|
| Junior | Ghi yêu cầu rõ, hỏi khi thiếu thông tin, cập nhật tài liệu theo feedback | Chỉ chép lời stakeholder, thiếu tiêu chí nghiệm thu |
| Middle | Tự phân tích feature vừa, phối hợp tốt với design/dev/QA | Chưa phát hiện ngoại lệ, conflict hoặc tác động liên hệ thống |
| Senior | Làm rõ bài toán mơ hồ, yêu cầu đủ để build/test, giảm hiểu sai đáng kể | Viết tài liệu dài nhưng mục tiêu, quyết định và owner chưa rõ |
| Lead/Product-System Analyst | Team có chuẩn yêu cầu tốt hơn, ít thiếu case, ngôn ngữ sản phẩm rõ | BA trở thành nút chuyển tiếp tài liệu, chưa dẫn dắt discovery |

## 8. Muốn lên level tiếp theo cần chứng minh gì

| Từ | Lên | Cần chứng minh |
|---|---|---|
| Junior | Middle | Tự hoàn thành yêu cầu cho flow nhỏ/feature nhỏ có user story và acceptance criteria rõ. |
| Middle | Senior | Làm chủ một luồng sản phẩm quan trọng, phát hiện edge case, dependency và rủi ro hiểu sai. |
| Senior | Lead/Product-System Analyst | Tạo template, glossary, rule model hoặc chuẩn discovery giúp nhiều dự án giảm lỗi yêu cầu. |

## 9. Lỗi phổ biến khiến bị kẹt level

| Lỗi | Cách sửa |
|---|---|
| Chỉ ghi lại yêu cầu, không phân tích mục tiêu | Luôn hỏi vấn đề cần giải, người dùng là ai, tiêu chí thành công và việc không làm. |
| Acceptance criteria mơ hồ | Viết AC có điều kiện, hành động, kết quả mong đợi, ngoại lệ và dữ liệu ví dụ khi cần. |
| Không kiểm tra khả thi với kỹ thuật/QA | Review sớm với design, dev, firmware/software/app và QA để phát hiện thiếu case. |

## 10. Checklist tự đánh giá

| Câu hỏi | Chưa có | Đang hình thành | Ổn định | Vượt kỳ vọng |
|---|---:|---:|---:|---:|
| Tôi có hiểu bài toán và mục tiêu trước khi viết yêu cầu không? |  |  |  |  |
| Yêu cầu của tôi có đủ flow chính, ngoại lệ, trạng thái và acceptance criteria không? |  |  |  |  |
| Tôi có làm rõ dependency giữa thiết bị, firmware, software, cloud, app và QA không? |  |  |  |  |
| Tôi có giúp stakeholder và kỹ thuật thống nhất cùng một cách hiểu không? |  |  |  |  |
| Tôi có tạo template/glossary/rule model giúp giảm hiểu sai về sau không? |  |  |  |  |
