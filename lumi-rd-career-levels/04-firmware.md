# Khung Level Vị Trí Firmware R&D Lumi

Tài liệu này áp dụng khung phát triển nghề nghiệp vào team Firmware trong R&D Lumi. Đây là tài liệu định hướng năng lực, không phải khung lương hoặc tiêu chí đánh giá nhân sự chính thức.

## 1. Tổng quan vai trò

Team Firmware phát triển phần mềm nhúng chạy trên MCU, vi điều khiển và các thiết bị IoT trong hệ sinh thái Lumi. Firmware là lớp gần thiết bị nhất, giúp phần cứng hoạt động thông minh, kết nối ổn định và tích hợp với Hub, Home Controller, AIH, software nền tảng, cloud và app.

Thành công của vị trí Firmware được đo bằng thiết bị hoạt động ổn định trong thực tế, giao tiếp tin cậy, tối ưu tài nguyên/năng lượng, có khả năng cập nhật và dễ kiểm thử, debug, vận hành.

## 2. Phạm vi công việc chính

| Nhóm việc | Nội dung |
|---|---|
| Logic thiết bị | Điều khiển chức năng thiết bị, trạng thái, sự kiện, timer, sensor, actuator và xử lý lỗi. |
| Giao thức kết nối | Tích hợp Zigbee, Bluetooth Mesh, WiFi, KNX hoặc giao thức khác theo yêu cầu sản phẩm. |
| Tối ưu nhúng | Tối ưu tài nguyên MCU, năng lượng, độ trễ, độ tin cậy, bộ nhớ và khả năng cập nhật firmware. |
| Tích hợp hệ thống | Phối hợp với hardware, software, app và QA để thiết bị hoạt động trong hệ sinh thái Lumi. |

## 3. Đầu vào và đầu ra

| Đầu vào | Đầu ra |
|---|---|
| Phần cứng mẫu, yêu cầu chức năng thiết bị, giao thức kết nối, yêu cầu hiệu năng, yêu cầu tiêu thụ năng lượng và yêu cầu cập nhật. | Firmware thiết bị, logic điều khiển, tích hợp giao thức, bản firmware thử nghiệm, bản firmware phát hành và tài liệu kỹ thuật liên quan. |

## 4. Bản đồ level nghề nghiệp

```text
Junior Firmware Engineer
  -> Middle Firmware Engineer
      -> Senior Firmware Engineer
          -> Staff Firmware Engineer hoặc Firmware Tech Lead
```

Staff Firmware Engineer tập trung vào platform, chuẩn giao thức, kiến trúc firmware và độ tin cậy xuyên nhiều dòng thiết bị. Firmware Tech Lead tập trung vào hướng kỹ thuật, phân việc, review, unblock và chất lượng delivery của team.

## 5. So sánh level

| Chiều so sánh | Junior | Middle | Senior | Staff/Lead |
|---|---|---|---|---|
| Phạm vi ảnh hưởng | Task nhỏ, driver đơn giản, bug rõ | Feature thiết bị hoặc module firmware | Một thiết bị/luồng tích hợp quan trọng end-to-end | Platform firmware, chuẩn giao thức, nhiều thiết bị/team |
| Mức tự chủ | Cần task rõ và hướng dẫn debug | Tự làm phần quen thuộc, biết hỏi đúng | Làm rõ yêu cầu, rủi ro, test và rollout firmware | Định hướng kiến trúc, chuẩn hóa và gỡ block xuyên team |
| Chất lượng đầu ra | Code chạy đúng happy path | Feature ổn, có test cơ bản | Firmware ổn định, recover tốt, dễ debug, dễ update | Giảm lỗi nền tảng, tăng khả năng tái sử dụng và vận hành |
| Phối hợp | Chủ yếu với người hướng dẫn | Phối hợp hardware/QA trong phạm vi rõ | Chủ động đồng bộ interface với hardware, software, app, QA | Đại diện firmware trong quyết định hệ thống và sản phẩm |
| Tài liệu | Note cách build/chạy | Ghi rõ cấu hình và test | Design note, log/debug guide, release note, known issues | Guideline, protocol spec, platform doc, runbook |

## 6. Năng lực cốt lõi

| Nhóm năng lực | Junior | Middle | Senior | Staff/Lead |
|---|---|---|---|---|
| Chuyên môn | Hiểu C/Rust/C nhúng, GPIO, peripheral cơ bản | Xử lý module, giao thức, trạng thái thiết bị | Thiết kế firmware có failure mode, update, logging, testability | Định hình kiến trúc firmware/platform và chuẩn tích hợp |
| Ownership và mơ hồ | Cần yêu cầu rõ | Tự chia nhỏ feature | Biến mục tiêu mơ hồ thành plan, risk, estimate | Tạo hướng đi cho nhiều thiết bị hoặc nhiều người |
| Phối hợp liên team | Hỗ trợ bring-up | Phối hợp hardware và QA | Kéo software/app/QA/hardware thống nhất interface | Gỡ block hệ thống giữa thiết bị, gateway, cloud, app |
| Chất lượng và vận hành | Test cơ bản trên board | Test nhiều trạng thái phổ biến | Quan tâm OTA, rollback, log, recover, tương thích | Đặt chuẩn reliability, debug và release firmware |
| Tài liệu | Ghi chú debug | Hướng dẫn build/test | Design doc, release note, known issues rõ | Spec, guideline, checklist, bài học sau incident |

## 7. Dấu hiệu nhận biết

| Level | Dấu hiệu tích cực | Dấu hiệu chưa tới |
|---|---|---|
| Junior | Hoàn thành task nhỏ, hỏi sớm khi kẹt, biết đọc log/trace cơ bản | Chỉ chạy happy path, debug mò, không ghi lại cách tái hiện |
| Middle | Tự xử lý feature vừa, test trên thiết bị thật, phối hợp tốt với QA/hardware | Ít nhìn tác động tới app/software hoặc điều kiện thực tế |
| Senior | Làm chủ thiết bị/luồng end-to-end, giao tiếp rủi ro sớm, firmware ổn định sau release | Chỉ tập trung code, thiếu tài liệu, thiếu test update/recover |
| Staff/Lead | Tạo platform/chuẩn giúp nhiều thiết bị ổn hơn, team ít lặp lỗi | Ôm bug khó một mình, trở thành nút cổ chai release |

## 8. Muốn lên level tiếp theo cần chứng minh gì

| Từ | Lên | Cần chứng minh |
|---|---|---|
| Junior | Middle | Tự hoàn thành module/feature nhỏ, test được trên thiết bị và mô tả được lỗi. |
| Middle | Senior | Làm chủ một feature/thiết bị quan trọng từ yêu cầu đến release, có test và rủi ro rõ. |
| Senior | Staff/Lead | Tạo chuẩn/platform/checklist giúp nhiều thiết bị hoặc nhiều engineer phát triển firmware tốt hơn. |

## 9. Lỗi phổ biến khiến bị kẹt level

| Lỗi | Cách sửa |
|---|---|
| Chỉ test trong phòng lab | Test nhiễu, mất kết nối, mất nguồn, update lỗi, reset, điều kiện mạng và thiết bị thật. |
| Thiếu log và cách tái hiện lỗi | Thiết kế logging/debug point, ghi rõ bước tái hiện, firmware version và hardware revision. |
| Không đồng bộ interface sớm | Chốt protocol, state, error code, versioning với software/app/QA trước khi tích hợp sâu. |

## 10. Checklist tự đánh giá

| Câu hỏi | Chưa có | Đang hình thành | Ổn định | Vượt kỳ vọng |
|---|---:|---:|---:|---:|
| Firmware của tôi có xử lý lỗi, mất kết nối, reset và update không? |  |  |  |  |
| Tôi có test trên thiết bị thật và ghi lại điều kiện kiểm thử không? |  |  |  |  |
| Tôi có làm rõ interface với hardware, software, app và QA không? |  |  |  |  |
| Tôi có tài liệu debug/release đủ để người khác dùng tiếp không? |  |  |  |  |
| Tôi có tạo chuẩn hoặc module dùng lại cho nhiều thiết bị không? |  |  |  |  |
