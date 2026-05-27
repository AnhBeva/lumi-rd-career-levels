# Khung Level Vị Trí Software R&D Lumi

Tài liệu này áp dụng khung phát triển nghề nghiệp vào team Software trong R&D Lumi. Đây là tài liệu định hướng năng lực, không phải khung lương hoặc tiêu chí đánh giá nhân sự chính thức.

## 1. Tổng quan vai trò

Team Software phát triển phần mềm nền tảng cho hệ sinh thái Lumi, gồm phần mềm Linux trên Hub/Home Controller/AIH, service điều khiển và tự động hóa, backend/cloud, API, xử lý dữ liệu và các thành phần dùng chung. Rust là công nghệ trọng tâm cho các hệ thống cần hiệu năng, an toàn bộ nhớ, xử lý đồng thời và độ tin cậy cao.

Thành công của vị trí Software được đo bằng hệ thống ổn định, mở rộng được, bảo trì được, an toàn, có quan sát vận hành tốt và tích hợp hiệu quả với firmware, app, QA, thiết bị và cloud.

## 2. Phạm vi công việc chính

| Nhóm việc | Nội dung |
|---|---|
| Linux và gateway | Phần mềm chạy trên bộ điều khiển trung tâm, xử lý thiết bị, tự động hóa, local control và kết nối cloud. |
| Backend/cloud | Service, API, đồng bộ dữ liệu, quản lý tài khoản/thiết bị, điều khiển từ xa và vận hành nền tảng. |
| Nền tảng dùng chung | Module xử lý dữ liệu, messaging, device model, integration, observability và công cụ nội bộ. |
| Chất lượng hệ thống | Hiệu năng, bảo mật, độ sẵn sàng, khả năng mở rộng, test, deploy, rollback và runbook. |

## 3. Đầu vào và đầu ra

| Đầu vào | Đầu ra |
|---|---|
| Yêu cầu hệ thống, yêu cầu từ thiết bị, yêu cầu cloud, yêu cầu tự động hóa, yêu cầu hiệu năng và yêu cầu vận hành. | Service nền tảng, phần mềm Linux cho bộ điều khiển trung tâm, backend/cloud, API, module xử lý dữ liệu và các thành phần nền tảng dùng chung. |

## 4. Bản đồ level nghề nghiệp

```text
Junior Software Engineer
  -> Middle Software Engineer
      -> Senior Software Engineer
          -> Staff Software Engineer hoặc Software Tech Lead
              -> Principal Engineer
```

Staff/Principal tập trung vào ảnh hưởng kỹ thuật rộng, platform, chuẩn kiến trúc và quyết định dài hạn. Tech Lead tập trung vào direction, delivery, review, coaching và chất lượng kỹ thuật của team.

## 5. So sánh level

| Chiều so sánh | Junior | Middle | Senior | Staff/Lead |
|---|---|---|---|---|
| Phạm vi ảnh hưởng | Task, bug, endpoint hoặc module nhỏ | Feature/service nhỏ | Service, system hoặc luồng nghiệp vụ quan trọng | Nhiều service, platform, chuẩn kỹ thuật hoặc nhiều team |
| Mức tự chủ | Cần task rõ và review thường xuyên | Tự xử lý phần rõ | Làm rõ bài toán mơ hồ, trade-off, plan, risk | Tạo hướng đi, chuẩn hóa, unblock nhiều người |
| Chất lượng đầu ra | Code đúng yêu cầu, test cơ bản | Feature hoàn chỉnh, test tốt | Thiết kế dễ bảo trì, reliable, observable | Đặt chuẩn kiến trúc, reliability, security, performance |
| Phối hợp | Chủ yếu trong team | Làm việc với QA/PM/App/Firmware khi cần | Chủ động đồng bộ interface và rủi ro liên team | Đại diện kỹ thuật trong quyết định sản phẩm/nền tảng |
| Vận hành | Hiểu build/deploy cơ bản | Debug lỗi feature | Làm chủ health, alert, incident, rollback | Tạo runbook, SLO/SLI, chiến lược vận hành và migration |

## 6. Năng lực cốt lõi

| Nhóm năng lực | Junior | Middle | Senior | Staff/Lead |
|---|---|---|---|---|
| Chuyên môn | Viết code theo pattern, hiểu service/module | Thiết kế feature sạch, có test | Thiết kế system có failure mode, performance, security | Định hình platform, architecture, chuẩn kỹ thuật |
| Ownership và mơ hồ | Cần yêu cầu rõ | Tự chia nhỏ feature | Biến mục tiêu mơ hồ thành kế hoạch khả thi | Tạo roadmap kỹ thuật và gỡ block xuyên team |
| Phối hợp liên team | Cập nhật khi được hỏi | Chủ động trong phạm vi team | Đồng bộ app, firmware, QA, PM, DevOps/Security khi cần | Điều phối quyết định kỹ thuật nhiều bên |
| Chất lượng và vận hành | Test happy path | Test đủ feature | Observability, rollback, migration, incident learning | Reliability strategy, security pattern, cost awareness |
| Tài liệu | Note kỹ thuật đơn giản | Tài liệu feature/API | Design doc, ADR, runbook, release note | Strategy doc, standard, migration plan, platform doc |

## 7. Dấu hiệu nhận biết

| Level | Dấu hiệu tích cực | Dấu hiệu chưa tới |
|---|---|---|
| Junior | Hoàn thành task rõ, hỏi sớm, học nhanh từ review | Im lặng khi block, chỉ chạy happy path, copy code chưa hiểu |
| Middle | Tự làm feature vừa, phối hợp tốt, review được code quen thuộc | Chỉ làm ticket, ít nhìn tác động hệ thống |
| Senior | Nhận mục tiêu mơ hồ và trả về kế hoạch rõ, nâng chất lượng team qua review | Chỉ muốn code, né design doc, báo rủi ro muộn |
| Staff/Lead | Nhiều team/service tốt hơn nhờ chuẩn và direction của mình | Làm Senior mạnh hơn nhưng phạm vi vẫn quanh một team |

## 8. Muốn lên level tiếp theo cần chứng minh gì

| Từ | Lên | Cần chứng minh |
|---|---|---|
| Junior | Middle | Tự hoàn thành feature nhỏ, có test, không cần cầm tay từng bước. |
| Middle | Senior | Làm chủ một vấn đề end-to-end, xử lý mơ hồ, giao tiếp rủi ro và nâng chất lượng qua review. |
| Senior | Staff/Lead | Ảnh hưởng vượt khỏi một service/team, tạo pattern/standard dùng lại hoặc dẫn dắt team ship tốt hơn. |

## 9. Lỗi phổ biến khiến bị kẹt level

| Lỗi | Cách sửa |
|---|---|
| Tưởng level cao chỉ là code nhanh hơn | Chuyển trọng tâm sang ownership, thiết kế, vận hành, giao tiếp và tác động team. |
| Thiếu quan sát vận hành | Bổ sung log, metric, alert, health check, rollback và runbook cho phần mình làm chủ. |
| Không ghi lại quyết định kỹ thuật | Dùng design doc/ADR để nêu bối cảnh, phương án, trade-off, rủi ro và owner. |

## 10. Checklist tự đánh giá

| Câu hỏi | Chưa có | Đang hình thành | Ổn định | Vượt kỳ vọng |
|---|---:|---:|---:|---:|
| Tôi có kéo việc đến kết quả cuối thay vì chỉ xong code không? |  |  |  |  |
| Thiết kế của tôi có failure mode, test, observability và rollback không? |  |  |  |  |
| Tôi có báo rủi ro, thay đổi estimate và quyết định quan trọng đủ sớm không? |  |  |  |  |
| Review của tôi có giúp người khác tốt lên không? |  |  |  |  |
| Tôi có tạo pattern hoặc chuẩn dùng lại cho nhiều service/team không? |  |  |  |  |
