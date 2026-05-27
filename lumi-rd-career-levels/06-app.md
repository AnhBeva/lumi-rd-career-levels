# Khung Level Vị Trí App R&D Lumi

Tài liệu này áp dụng khung phát triển nghề nghiệp vào team App trong R&D Lumi. Đây là tài liệu định hướng năng lực, không phải khung lương hoặc tiêu chí đánh giá nhân sự chính thức.

## 1. Tổng quan vai trò

Team App phát triển ứng dụng mobile như Lumina, phần mềm desktop và các giao diện cấu hình, cài đặt, điều khiển hoặc vận hành hệ thống Lumi. Flutter là nền tảng chính cho ứng dụng đa nền tảng; Rust có thể được dùng cho một số phần nền tảng hoặc logic cần hiệu năng, độ ổn định và tái sử dụng cao.

Thành công của vị trí App được đo bằng trải nghiệm người dùng rõ ràng, ổn định, phản ánh đúng trạng thái thiết bị/hệ thống, tích hợp tốt với backend/cloud, firmware, software và đáp ứng tốt điều kiện sử dụng thực tế.

## 2. Phạm vi công việc chính

| Nhóm việc | Nội dung |
|---|---|
| Mobile/Desktop | Phát triển app mobile, phần mềm desktop, giao diện cấu hình và vận hành hệ thống. |
| UI/UX triển khai | Chuyển thiết kế thành giao diện thật, xử lý responsive, state, animation, accessibility và usability. |
| Tích hợp hệ thống | API/backend, trạng thái thiết bị, tài khoản, kịch bản, đồng bộ dữ liệu và giao tiếp gateway/cloud. |
| Chất lượng app | Hiệu năng, crash-free, offline/online, lỗi mạng, state consistency, test và release. |

## 3. Đầu vào và đầu ra

| Đầu vào | Đầu ra |
|---|---|
| Thiết kế UI/UX, API/backend, yêu cầu sản phẩm, yêu cầu người dùng, yêu cầu cấu hình và vận hành hệ thống. | App mobile, phần mềm desktop, giao diện cấu hình, giao diện điều khiển, trải nghiệm người dùng và các bản phát hành ứng dụng. |

## 4. Bản đồ level nghề nghiệp

```text
Junior App Engineer
  -> Middle App Engineer
      -> Senior App Engineer
          -> Staff App Engineer hoặc App Tech Lead
```

Staff App Engineer tập trung vào kiến trúc app, design system triển khai, performance, module dùng chung và chất lượng xuyên nhiều ứng dụng/nền tảng. App Tech Lead tập trung vào direction, delivery, review, coaching và phối hợp với design/backend/QA.

## 5. So sánh level

| Chiều so sánh | Junior | Middle | Senior | Staff/Lead |
|---|---|---|---|---|
| Phạm vi ảnh hưởng | Màn hình, widget, bug rõ | Feature hoặc luồng vừa | Luồng quan trọng end-to-end | Kiến trúc app, module dùng chung, nhiều feature/team |
| Mức tự chủ | Cần task/design rõ | Tự làm phần quen thuộc | Làm rõ yêu cầu, state, API, edge case | Định hướng app architecture và chuẩn triển khai |
| Chất lượng đầu ra | UI đúng cơ bản, chạy happy path | Feature ổn, xử lý state phổ biến | Trải nghiệm mượt, ổn định, testable, ít lỗi release | Chuẩn hóa performance, state management, release quality |
| Phối hợp | Nhận feedback từ design/QA | Phối hợp backend/design/QA khi cần | Chủ động chốt API, trạng thái, acceptance criteria | Gỡ block liên team và cải thiện quy trình handoff |
| Vận hành | Biết build/chạy app | Debug lỗi feature/crash đơn giản | Quan tâm crash, analytics, rollout, backward compatibility | Đặt chuẩn release, monitoring và migration app |

## 6. Năng lực cốt lõi

| Nhóm năng lực | Junior | Middle | Senior | Staff/Lead |
|---|---|---|---|---|
| Chuyên môn | Flutter/UI/component cơ bản | Feature hoàn chỉnh, state và API rõ | Kiến trúc feature, performance, offline/error state | App architecture, module hóa, design system triển khai |
| Ownership và mơ hồ | Cần yêu cầu rõ | Tự chia nhỏ feature | Biến luồng mơ hồ thành plan và edge case | Tạo hướng đi cho nhiều feature hoặc nhiều người |
| Phối hợp liên team | Nhận spec và feedback | Làm việc với UI/UX, backend, QA | Chủ động chốt API, trạng thái thiết bị, test case | Điều phối quyết định app với design, software, firmware, QA |
| Chất lượng và vận hành | Test thao tác cơ bản | Test flow chính và lỗi phổ biến | Crash-free, performance, release risk, backward compatibility | Monitoring, release checklist, migration strategy |
| Tài liệu | Note cách chạy | Ghi chú feature/API | Handoff ngược cho QA/backend, release note | Guideline, component doc, architecture decision |

## 7. Dấu hiệu nhận biết

| Level | Dấu hiệu tích cực | Dấu hiệu chưa tới |
|---|---|---|
| Junior | Làm đúng màn hình/task rõ, sửa feedback nhanh | Chỉ khớp giao diện tĩnh, bỏ qua state lỗi/loading/empty |
| Middle | Tự xử lý feature vừa, phối hợp tốt với QA/backend/design | Ít nhìn tác động tới luồng người dùng hoặc trạng thái thiết bị thật |
| Senior | Làm chủ luồng end-to-end, xử lý edge case và release risk rõ | Chỉ tập trung UI/code, thiếu test và thiếu phối hợp API sớm |
| Staff/Lead | App ổn định hơn nhờ chuẩn kiến trúc, component, review và release checklist | Ôm hết phần khó, team phụ thuộc vào một người |

## 8. Muốn lên level tiếp theo cần chứng minh gì

| Từ | Lên | Cần chứng minh |
|---|---|---|
| Junior | Middle | Tự hoàn thành màn hình/feature nhỏ có xử lý state và test cơ bản. |
| Middle | Senior | Làm chủ một luồng quan trọng từ design/API đến release, edge case rõ. |
| Senior | Staff/Lead | Tạo component, pattern, checklist hoặc kiến trúc giúp app ổn định và team nhanh hơn. |

## 9. Lỗi phổ biến khiến bị kẹt level

| Lỗi | Cách sửa |
|---|---|
| Chỉ làm đúng giao diện tĩnh | Kiểm tra loading, empty, error, offline, permission, thiết bị mất kết nối và dữ liệu thật. |
| Chốt API muộn | Đồng bộ sớm với backend/software về contract, versioning, error code và state. |
| Thiếu quan sát sau release | Theo dõi crash, lỗi phổ biến, feedback người dùng, hiệu năng và tỉ lệ thành công của luồng chính. |

## 10. Checklist tự đánh giá

| Câu hỏi | Chưa có | Đang hình thành | Ổn định | Vượt kỳ vọng |
|---|---:|---:|---:|---:|
| Feature của tôi có xử lý đủ loading, empty, error, offline và permission không? |  |  |  |  |
| Tôi có chốt API/state/acceptance criteria rõ với backend, design và QA không? |  |  |  |  |
| Tôi có quan tâm performance, crash và trải nghiệm sau release không? |  |  |  |  |
| Tôi có để lại tài liệu đủ để QA và người khác tiếp tục không? |  |  |  |  |
| Tôi có tạo component/pattern giúp app nhất quán hơn không? |  |  |  |  |
