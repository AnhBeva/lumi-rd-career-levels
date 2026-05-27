# Khung level Software Engineer từ Junior trở lên

Tài liệu này giúp mỗi nhân sự tự trả lời 3 câu hỏi:

- Mình đang vận hành gần level nào nhất?
- Mình muốn phát triển theo hướng nào: kỹ sư cá nhân chuyên sâu, Tech Lead hay Solution Architect?
- Để lên bước tiếp theo, mình cần chứng minh điều gì bằng kết quả công việc thật?

Đây là tài liệu tự đánh giá và định hướng phát triển, không phải khung lương hay khung đánh giá nhân sự chính thức. Level trong thực tế còn phụ thuộc vào quy mô công ty, độ phức tạp sản phẩm, độ khó miền nghiệp vụ và kỳ vọng của từng tổ chức.

## Cách đọc nhanh

Không nên chỉ nhìn vào chức danh. Hãy nhìn vào phạm vi ảnh hưởng, mức tự chủ, độ mơ hồ bạn xử lý được, cách bạn giao tiếp, và chất lượng kết quả bạn tạo ra cho team.

| Nếu bạn thường... | Có thể bạn đang gần... |
|---|---|
| Cần task rõ, làm tốt phần được giao, hỏi khi gặp vấn đề | Junior |
| Tự xử lý feature/component vừa phải, biết phân tích và phối hợp trong team | Middle |
| Nhận bài toán mơ hồ, biến thành kế hoạch, kéo đến kết quả, nâng chất lượng team | Senior |
| Định hướng kỹ thuật cho nhiều team hoặc một mảng sản phẩm lớn | Staff |
| Đặt chiến lược kỹ thuật cấp tổ chức, tạo chuẩn dài hạn, xử lý quyết định rất khó đảo ngược | Principal |
| Dẫn dắt một team giao hàng đúng hướng, giúp người khác mạnh lên | Tech Lead |
| Thiết kế giải pháp xuyên hệ thống, cân bằng kỹ thuật, chi phí, rủi ro và stakeholder | Solution Architect |

## Thuật ngữ cần hiểu

| Thuật ngữ | Cách hiểu dễ đọc |
|---|---|
| Tinh thần làm chủ (ownership) | Không chỉ "làm xong phần của mình", mà kéo việc đến kết quả cuối: rõ trạng thái, rõ rủi ro, rõ người cần biết, rõ bước tiếp theo. |
| Phạm vi ảnh hưởng (scope) | Vùng mà quyết định và kết quả của bạn tác động tới: một task, một feature, một service, một team, nhiều team, hay cả tổ chức. |
| Tác động tạo ra (impact) | Giá trị thực tế sau công việc: người dùng tốt hơn, hệ thống ổn hơn, team nhanh hơn, chi phí giảm, rủi ro giảm. |
| Người/nhóm liên quan (stakeholder) | Những người bị ảnh hưởng hoặc có quyền quyết định: PM, QA, Design, DevOps, Security, khách hàng, quản lý, team khác. |
| Sản phẩm đầu ra (artifact) | Thứ để người khác dùng tiếp: code, test, tài liệu thiết kế, sơ đồ kiến trúc, kế hoạch migration, ADR, runbook, risk register. |
| Lộ trình (roadmap) | Bức tranh các việc quan trọng theo thời gian, thường theo tháng, quý hoặc năm. |
| Kèm cặp phát triển (mentorship) | Giúp người khác tốt lên bằng review, hướng dẫn, phản hồi, gợi mở cách nghĩ, không phải làm hộ. |
| Yêu cầu phi chức năng (NFR) | Các yêu cầu ngoài chức năng chính: hiệu năng, bảo mật, độ sẵn sàng, khả năng mở rộng, vận hành, chi phí, tuân thủ. |
| Đánh đổi (trade-off) | Chọn A thì được gì, mất gì; bỏ B thì rủi ro gì. Người senior trở lên phải nói rõ được đánh đổi. |
| Kỹ sư cá nhân (IC) | Individual Contributor: người tạo ảnh hưởng chủ yếu bằng chuyên môn kỹ thuật, không trực tiếp quản lý con người. |
| Tech Lead | Vai trò dẫn dắt kỹ thuật và delivery cho một team. Thành công được đo bằng kết quả của team, không chỉ code cá nhân. |
| Solution Architect | Vai trò thiết kế giải pháp tổng thể qua nhiều hệ thống, team và ràng buộc kinh doanh. Thành công được đo bằng giải pháp chạy được, vận hành được, chi phí hợp lý, được stakeholder chấp nhận. |
| ADR | Architecture Decision Record: bản ghi quyết định kiến trúc, lý do chọn, phương án bị loại, rủi ro và điều kiện xem xét lại. |
| Runbook | Tài liệu hướng dẫn vận hành/xử lý sự cố cho hệ thống hoặc quy trình. |

## Bản đồ phát triển nghề nghiệp

```text
Junior
  -> Middle
      -> Senior
          -> Staff Engineer
              -> Principal Engineer

Senior
  -> Tech Lead
      -> Engineering Manager hoặc Staff/Principal thiên về leadership kỹ thuật

Senior hoặc Staff
  -> Solution Architect
      -> Principal Architect, Enterprise Architect hoặc CTO tùy tổ chức
```

Lưu ý quan trọng:

- Tech Lead không nhất thiết "cao hơn" Senior theo một đường thẳng. Đây là vai trò khác: nhiều trách nhiệm team, direction và con người hơn.
- Solution Architect không phải "Senior viết ít code". Đây là vai trò cầu nối giải pháp: hiểu business, stakeholder, NFR, chi phí, rủi ro, vận hành và khả năng giao hàng.
- Staff/Principal là hướng IC chuyên sâu: tăng ảnh hưởng kỹ thuật mà không nhất thiết quản lý con người.

## So sánh tổng quan các level IC

| Chiều so sánh | Junior | Middle | Senior | Staff | Principal |
|---|---|---|---|---|---|
| Phạm vi ảnh hưởng | Task nhỏ, bug, phần việc rõ | Feature hoặc component | Service, system hoặc luồng nghiệp vụ quan trọng | Một mảng sản phẩm, nhiều service, nhiều team | Cấp tổ chức, nền tảng, chiến lược kỹ thuật dài hạn |
| Mức tự chủ | Cần hướng dẫn thường xuyên | Tự làm phần rõ ràng, hỏi khi mơ hồ | Tự làm rõ bài toán, đề xuất hướng đi | Tạo hướng đi cho nhiều người | Định hình chiến lược và nguyên tắc kỹ thuật |
| Độ mơ hồ xử lý được | Thấp | Vừa | Cao | Rất cao | Rất cao, thường gắn với business và tổ chức |
| Thời gian nhìn trước | Vài ngày đến một sprint | Một sprint đến một tháng | Một quý | Nửa năm đến một năm | Một đến nhiều năm |
| Sản phẩm đầu ra chính | Code đúng yêu cầu, test cơ bản | Feature hoàn chỉnh, test tốt | Thiết kế, kế hoạch, code, review, tài liệu vận hành | Chiến lược kỹ thuật, roadmap, chuẩn chung | Nguyên tắc kiến trúc, nền tảng, định hướng tổ chức |
| Tác động chính | Hoàn thành việc được giao | Tăng tốc delivery trong team | Nâng chất lượng và độ tin cậy của team | Tăng hiệu quả nhiều team | Giảm rủi ro lớn, mở đường kỹ thuật dài hạn |
| Kèm cặp người khác | Nhận hướng dẫn | Hỗ trợ Junior | Chủ động mentor Junior/Middle | Phát triển Senior | Phát triển Staff/Lead/Architect |

## So sánh vai trò Senior, Tech Lead và Solution Architect

| Chiều so sánh | Senior Engineer | Tech Lead | Solution Architect |
|---|---|---|---|
| Câu hỏi chính | "Bài toán này nên được giải thế nào cho đúng và bền?" | "Team nên làm gì, làm thế nào, ai cần được nâng lên?" | "Giải pháp nào chạy được, mua được, vận hành được, và được stakeholder chấp nhận?" |
| Phạm vi | Một service, system hoặc dự án quan trọng | Một team 3-10 người, delivery và chất lượng kỹ thuật | Nhiều hệ thống, team, vendor, stakeholder |
| Thành công được đo bằng | Kết quả của phần mình làm chủ và chất lượng team được nâng lên | Team ship đúng thứ, đúng chất lượng, người trong team phát triển | Giải pháp end-to-end khả thi, chi phí hợp lý, rủi ro rõ, vận hành được |
| Mức code | Vẫn code nhiều, nhưng không chỉ code | Code ít hơn, tập trung unblock, review, direction | Code rất ít, chủ yếu spike/prototype khi cần chứng minh quyết định |
| Kỹ năng lõi | Ownership, thiết kế hệ thống, review, giao tiếp, reliability | Direction, coaching, planning, review, xử lý xung đột | Discovery, NFR, kiến trúc giải pháp, stakeholder, chi phí, rủi ro |
| Rủi ro lớn nhất | Chỉ làm "coder mạnh", không nâng phạm vi ảnh hưởng | Ôm hết việc, biến mình thành nút cổ chai | Vẽ kiến trúc đẹp nhưng không ship được hoặc không ai vận hành nổi |
| Sản phẩm đầu ra | Code, test, design doc, ADR, runbook, kế hoạch kỹ thuật | Roadmap team, RFC, review, quyết định kỹ thuật, feedback phát triển | Architecture brief, sơ đồ C4, ADR, risk register, NFR, vendor scorecard, TCO |

## So sánh đa chiều năng lực

### 1. Kỹ thuật và chất lượng

| Năng lực | Junior | Middle | Senior | Staff/Principal | Tech Lead | Solution Architect |
|---|---|---|---|---|---|---|
| Code | Viết được phần nhỏ theo mẫu | Viết feature sạch, có test | Thiết kế code dễ bảo trì, giảm rủi ro hệ thống | Định hình chuẩn kỹ thuật cho nhiều team | Code phần quan trọng, tránh ôm việc | Chỉ code spike khi cần chứng minh hướng |
| Testing | Biết viết test cơ bản | Test đủ cho feature | Chọn chiến lược test phù hợp rủi ro | Đặt chuẩn chất lượng và test strategy | Đảm bảo team không coi test là việc phụ | Đưa testability và vận hành vào thiết kế |
| Thiết kế hệ thống | Hiểu phần mình chạm vào | Thiết kế component nhỏ | Thiết kế service/system có failure mode rõ | Thiết kế cấp domain/nền tảng | Chọn hướng đủ tốt để team ship | Thiết kế end-to-end qua hệ thống, vendor, dữ liệu |
| Nợ kỹ thuật | Nhận biết vấn đề đơn giản | Sửa khi có cơ hội | Ưu tiên nợ kỹ thuật theo rủi ro và chi phí | Tạo chương trình cải thiện dài hạn | Cân bằng delivery và sức khỏe hệ thống | Đưa nợ vận hành, bảo mật, chi phí vào quyết định |

### 2. Tự chủ, ownership và xử lý mơ hồ

| Năng lực | Junior | Middle | Senior | Staff/Principal | Tech Lead | Solution Architect |
|---|---|---|---|---|---|---|
| Nhận việc | Cần task rõ | Tự chia nhỏ feature | Biến mục tiêu mơ hồ thành kế hoạch | Tạo bài toán đúng cho nhiều team | Biến mục tiêu team thành hướng đi | Biến vấn đề kinh doanh thành giải pháp khả thi |
| Khi bị block | Báo người hướng dẫn | Tự tìm vài hướng, hỏi đúng người | Chủ động nêu workaround, ETA, rủi ro | Gỡ block xuyên team | Gỡ block cho cả team | Gỡ block giữa business, kỹ thuật, security, vendor |
| Trách nhiệm kết quả | Xong task | Xong feature | Kết quả chạy tốt, rủi ro rõ | Kết quả nhiều team tốt hơn | Team giao hàng ổn định | Giải pháp được chấp thuận và vận hành được |
| Quyết định khó | Cần người khác quyết | Đề xuất trong phạm vi nhỏ | Phân tích đánh đổi, đề xuất quyết định | Dẫn dắt quyết định lớn | Phân biệt quyết định đảo ngược và khó đảo ngược | Làm rõ quyết định một chiều: cloud, identity, data model, API, compliance |

### 3. Giao tiếp và ảnh hưởng

| Năng lực | Junior | Middle | Senior | Staff/Principal | Tech Lead | Solution Architect |
|---|---|---|---|---|---|---|
| Cập nhật trạng thái | Khi được hỏi | Chủ động trong team | Chủ động báo tiến độ, rủi ro, thay đổi kế hoạch | Đồng bộ nhiều team | Tạo nhịp update cho team | Đồng bộ stakeholder kỹ thuật và phi kỹ thuật |
| Viết tài liệu | Ghi chú kỹ thuật đơn giản | Tài liệu feature/component | Design doc, ADR, runbook rõ ràng | Strategy doc, tiêu chuẩn, roadmap kỹ thuật | RFC, kế hoạch delivery, feedback phát triển | Architecture brief, NFR, risk register, TCO, decision memo |
| Review | Nhận review | Review phần quen thuộc | Review để dạy, không chỉ bắt lỗi | Đặt chuẩn review cho nhiều team | Review định hình văn hóa kỹ thuật team | Review kiến trúc, vendor, rủi ro, vận hành |
| Stakeholder | Ít tiếp xúc | Làm việc với QA/PM trong team | Nói rõ thực tế kỹ thuật với PM/Design/EM | Ảnh hưởng cấp nhóm sản phẩm | Đại diện team với PM/EM/team khác | Làm việc với business, security, finance, vendor, delivery team |

### 4. Vận hành, rủi ro và tác động kinh doanh

| Năng lực | Junior | Middle | Senior | Staff/Principal | Tech Lead | Solution Architect |
|---|---|---|---|---|---|---|
| Production | Hiểu deploy cơ bản | Debug lỗi trong phạm vi feature | Làm chủ health, alert, incident, rollback | Định hình tiêu chuẩn vận hành | Đảm bảo on-call và incident có học hỏi | Thiết kế operability ngay từ đầu |
| Bảo mật | Theo checklist | Biết rủi ro phổ biến | Chủ động hỏi về threat, permission, dữ liệu | Đặt pattern bảo mật cho nhiều team | Giữ team không bỏ qua security vì deadline | Gắn security, compliance, audit vào NFR |
| Chi phí | Ít quan tâm | Nhận biết chi phí obvious | Cân nhắc chi phí khi thiết kế | Tối ưu chi phí cấp nền tảng | Cân bằng chi phí và delivery | Lập mô hình chi phí/TCO, build vs buy |
| Business | Hiểu yêu cầu | Hiểu mục tiêu feature | Hỏi "có nên build không?" trước khi build | Gắn chiến lược kỹ thuật với chiến lược sản phẩm | Giúp team tập trung vào điều có giá trị | Biến ràng buộc kinh doanh thành quyết định giải pháp |

## Dấu hiệu nhận biết trong công việc hằng ngày

| Level/vai trò | Dấu hiệu tích cực | Dấu hiệu chưa tới |
|---|---|---|
| Junior | Hoàn thành task nhỏ, hỏi sớm khi kẹt, học nhanh từ review, biết kiểm tra lại việc mình làm | Im lặng khi block, copy code không hiểu, chỉ chạy happy path, phụ thuộc quá nhiều vào người hướng dẫn |
| Middle | Tự xử lý feature vừa phải, biết chia nhỏ việc, phối hợp tốt với QA/PM, review được code quen thuộc | Chỉ làm đúng ticket, ít nhìn tác động hệ thống, chưa chủ động cảnh báo rủi ro |
| Senior | Nhận mục tiêu mơ hồ và trả về kế hoạch rõ; giao tiếp rủi ro sớm; review giúp người khác tốt lên; nâng chất lượng codebase | Chỉ muốn code; né design doc; để PM/TL xử lý mọi mơ hồ; hay tạo bất ngờ vào phút cuối |
| Staff | Nhìn thấy vấn đề chung giữa nhiều team; tạo chuẩn dùng lại; gỡ nút thắt tổ chức bằng kỹ thuật và giao tiếp | Làm "Senior mạnh hơn" nhưng phạm vi vẫn trong một team; thiếu ảnh hưởng ngoài team |
| Principal | Định hình chiến lược dài hạn; xử lý quyết định khó đảo ngược; tạo nền tảng cho nhiều năm phát triển | Quá xa thực tế delivery; đưa ra nguyên tắc nhưng team không dùng được |
| Tech Lead | Team ship ổn định hơn nhờ bạn; người trong team phát triển; direction rõ; review nhanh và có tính dạy | Ôm ticket khó, trở thành người duy nhất biết mọi thứ, bỏ quên coaching và planning |
| Solution Architect | Giải pháp rõ ràng, có NFR, chi phí, rủi ro, vận hành, người quyết định; team build được sau khi handoff | Vẽ sơ đồ đẹp nhưng thiếu số liệu, thiếu owner, thiếu ràng buộc vận hành, stakeholder không đồng thuận |

## Muốn lên level tiếp theo cần chứng minh gì

| Từ | Lên | Cần chứng minh |
|---|---|---|
| Junior | Middle | Tự hoàn thành feature nhỏ hoặc task vừa; biết test; biết hỏi đúng; không cần cầm tay từng bước. |
| Middle | Senior | Làm chủ một vấn đề end-to-end; xử lý mơ hồ; chủ động giao tiếp rủi ro; nâng chất lượng cho người khác qua review/mentoring. |
| Senior | Staff | Ảnh hưởng vượt khỏi team; tạo pattern/standard dùng lại; giải quyết vấn đề hệ thống hoặc tổ chức chứ không chỉ project. |
| Staff | Principal | Định hình chiến lược dài hạn; xử lý quyết định nền tảng; tạo đòn bẩy cho nhiều team trong nhiều quý/năm. |
| Senior | Tech Lead | Có khả năng định hướng team, phân việc đúng người, coach, xử lý xung đột, cân bằng delivery và sức khỏe kỹ thuật. |
| Senior/Staff | Solution Architect | Có khả năng discovery, viết NFR rõ, thiết kế end-to-end, quản trị stakeholder, nói được chi phí/rủi ro/vận hành. |

## Lỗi phổ biến khiến bị kẹt level

| Level/vai trò | Lỗi phổ biến | Cách sửa |
|---|---|---|
| Junior | Chờ hướng dẫn quá lâu | Báo block sớm, đưa ra điều đã thử, hỏi câu cụ thể. |
| Junior | Chỉ quan tâm code chạy | Tập viết test, đọc log, tự review trước khi gửi PR. |
| Middle | Làm tốt task nhưng không nhìn bối cảnh | Luôn hỏi: việc này phục vụ mục tiêu nào, có rủi ro gì, ai bị ảnh hưởng? |
| Middle | Không giao tiếp khi estimate sai | Cập nhật sớm: còn gì, kẹt gì, đề xuất đổi plan thế nào. |
| Senior | Tưởng senior là code nhanh hơn | Chuyển từ "xong ticket" sang "làm chủ kết quả". |
| Senior | Review như cảnh sát bắt lỗi | Review để dạy: nói lý do, chỉ rõ mức độ blocking, tách taste khỏi correctness. |
| Staff | Tự làm thay vì tạo hệ thống cho người khác làm tốt | Tạo chuẩn, tài liệu, pattern, forum review, roadmap cải thiện. |
| Principal | Chiến lược quá trừu tượng | Gắn chiến lược với quyết định cụ thể, constraint, migration path và owner. |
| Tech Lead | Ôm việc khó vì "mình làm nhanh hơn" | Giao việc để người khác lớn lên, chỉ tự làm phần thật sự unblock nhiều người. |
| Tech Lead | Bận họp nhưng team vẫn mơ hồ | Viết direction ngắn, rõ việc làm/không làm, nhịp update đều. |
| Solution Architect | Thiết kế theo công nghệ mình thích | Bắt đầu từ vấn đề, constraint, NFR, năng lực vận hành và chi phí. |
| Solution Architect | Thiếu quyết định được ghi lại | Dùng ADR/risk register để mọi người biết quyết định, lý do và owner. |

## Checklist tự đánh giá

Chấm mỗi dòng theo thang:

- Chưa có: gần như chưa thể hiện trong công việc.
- Đang hình thành: đã có lúc làm được nhưng chưa ổn định.
- Ổn định: làm được thường xuyên, người khác tin cậy.
- Vượt kỳ vọng: tạo ảnh hưởng vượt khỏi phạm vi vai trò hiện tại.

| Nhóm năng lực | Câu hỏi tự đánh giá | Chưa có | Đang hình thành | Ổn định | Vượt kỳ vọng |
|---|---|---:|---:|---:|---:|
| Ownership | Khi nhận việc, tôi có kéo đến kết quả cuối thay vì chỉ xong phần code không? |  |  |  |  |
| Phạm vi | Công việc của tôi đang ảnh hưởng tới task, feature, service, team hay nhiều team? |  |  |  |  |
| Mơ hồ | Tôi có tự làm rõ yêu cầu, rủi ro, owner và bước tiếp theo không? |  |  |  |  |
| Chất lượng kỹ thuật | Code/test/design của tôi có làm người sau dễ bảo trì hơn không? |  |  |  |  |
| Giao tiếp | Tôi có báo rủi ro, thay đổi estimate và quyết định quan trọng đủ sớm không? |  |  |  |  |
| Review | Review của tôi có giúp người khác hiểu lý do và tốt lên không? |  |  |  |  |
| Mentorship | Tôi có giúp ít nhất một người khác phát triển rõ ràng hơn không? |  |  |  |  |
| Kiến trúc | Tôi có nêu được đánh đổi, failure mode và khả năng mở rộng của thiết kế không? |  |  |  |  |
| Vận hành | Tôi có hiểu health, alert, deploy, rollback, runbook của phần mình làm chủ không? |  |  |  |  |
| Business | Tôi có hiểu tác động sản phẩm/chi phí/rủi ro của quyết định kỹ thuật không? |  |  |  |  |
| Stakeholder | Tôi có làm việc hiệu quả với PM, QA, Design, DevOps, Security hoặc team khác không? |  |  |  |  |
| Tài liệu | Tôi có để lại artifact đủ rõ để người khác tiếp tục mà không cần hỏi lại nhiều không? |  |  |  |  |

## Gợi ý diễn giải kết quả tự đánh giá

| Kết quả phổ biến | Diễn giải |
|---|---|
| Nhiều dòng "Chưa có" ở ownership, mơ hồ, giao tiếp | Có thể đang ở Junior hoặc Middle sớm. Nên tập tự làm rõ việc và báo rủi ro sớm. |
| Kỹ thuật tốt nhưng mentorship, stakeholder, tài liệu yếu | Có thể là Middle mạnh hoặc Senior mới. Muốn lên Senior vững cần tăng tác động lên team. |
| Ownership, design, review tốt trong team nhưng ít ảnh hưởng ngoài team | Senior vững. Nếu muốn lên Staff, cần mở rộng phạm vi sang nhiều team/service. |
| Mạnh về direction, coaching, delivery, review | Phù hợp hướng Tech Lead. Cần chú ý không ôm việc thay team. |
| Mạnh về NFR, stakeholder, kiến trúc end-to-end, chi phí/rủi ro | Phù hợp hướng Solution Architect. Cần rèn discovery và giao tiếp với người không kỹ thuật. |
| Mạnh về chiến lược kỹ thuật, chuẩn chung, quyết định dài hạn | Phù hợp hướng Staff/Principal IC. Cần giữ kết nối với thực tế delivery. |

## Lộ trình phát triển theo 3 hướng

### Hướng 1: IC chuyên sâu

Phù hợp với người muốn tăng ảnh hưởng kỹ thuật nhưng không muốn quản lý con người trực tiếp.

| Giai đoạn | Trọng tâm phát triển | Bằng chứng nên có |
|---|---|---|
| Senior vững | Làm chủ system, design tốt, review tốt, giao tiếp rõ | Một project quan trọng được ship ổn định, có design doc, test, runbook, post-launch learning |
| Staff | Ảnh hưởng nhiều team, tạo pattern dùng lại, gỡ nút thắt kỹ thuật | Standard hoặc platform/pattern được nhiều team áp dụng |
| Principal | Chiến lược dài hạn, quyết định nền tảng, giảm rủi ro lớn | Roadmap kỹ thuật nhiều quý/năm, quyết định kiến trúc lớn có owner và kết quả rõ |

### Hướng 2: Tech Lead

Phù hợp với người muốn nhân hệ số cho team: direction, delivery, coaching, chất lượng kỹ thuật.

| Giai đoạn | Trọng tâm phát triển | Bằng chứng nên có |
|---|---|---|
| Senior chuẩn bị làm lead | Review tốt, mentor được người khác, chủ động planning | Junior/Middle tiến bộ nhờ bạn; project có kế hoạch rõ |
| Tech Lead mới | Direction rõ, phân việc hợp lý, unblock nhanh, giao tiếp stakeholder | Team ship đều hơn; ít bất ngờ; technical debt và incident có plan |
| Tech Lead vững | Team tự vận hành tốt, chất lượng tăng, người trong team lớn lên | Bạn không còn là nút cổ chai; team vẫn chạy tốt khi bạn vắng mặt |

### Hướng 3: Solution Architect

Phù hợp với người thích bài toán rộng: business, hệ thống, stakeholder, chi phí, rủi ro và vận hành.

| Giai đoạn | Trọng tâm phát triển | Bằng chứng nên có |
|---|---|---|
| Senior/Staff chuyển hướng SA | Discovery, NFR, sơ đồ C4, ADR, cost awareness | Một thiết kế end-to-end có NFR, rủi ro, owner và handoff rõ |
| Solution Architect | Cân bằng build/buy, vendor, security, compliance, stakeholder | Giải pháp được duyệt, team build được, vận hành được |
| Principal/Enterprise Architect | Chuẩn kiến trúc dài hạn, portfolio, governance vừa đủ | Nhiều giải pháp đi theo chuẩn chung mà không làm chậm delivery |

## Mẫu câu tự kiểm tra theo level

| Câu hỏi | Nếu trả lời được tốt, thường là dấu hiệu |
|---|---|
| Tôi có thể giải thích rõ vì sao task này quan trọng không? | Middle trở lên |
| Tôi có thể tự chia một feature thành các bước nhỏ, test được, review được không? | Middle |
| Tôi có thể nhận một mục tiêu mơ hồ và viết kế hoạch có rủi ro, estimate, trade-off không? | Senior |
| Tôi có thể giúp người khác tốt lên mà không làm thay họ không? | Senior/Tech Lead |
| Tôi có thể tạo một pattern để nhiều team dùng lại không? | Staff |
| Tôi có thể chỉ ra quyết định nào khó đảo ngược và cần làm chậm lại không? | Staff/Principal/Tech Lead/Solution Architect |
| Tôi có thể nói chuyện với stakeholder phi kỹ thuật về chi phí, rủi ro, timeline và đánh đổi không? | Tech Lead/Solution Architect |
| Tôi có thể thiết kế một giải pháp end-to-end có NFR, security, vận hành và chi phí không? | Solution Architect |

## Nguồn tham khảo

Tài liệu này được tổng hợp, Việt hóa và diễn giải lại từ các bài sau:

- [The Senior Software Engineer Playbook - Part 1](https://viblo.asia/p/the-senior-software-engineer-playbook-from-good-coder-to-high-impact-engineer-part-1-1QLxnpRd4Aw)
- [The Senior Software Engineer Playbook - Part 2](https://viblo.asia/p/the-senior-software-engineer-playbook-from-good-coder-to-high-impact-engineer-part-2-1j4lQPZWJwl)
- [The Tech Lead Playbook - Part 1](https://viblo.asia/p/the-tech-lead-playbook-from-best-ic-to-multiplier-part-1-wd43EZOKLX9)
- [The Tech Lead Playbook - Part 2](https://viblo.asia/p/the-tech-lead-playbook-from-best-ic-to-multiplier-part-2-Nj4vg8B8J6r)
- [The Solution Architect Playbook - Part 1](https://viblo.asia/p/the-solution-architect-playbook-from-best-designer-to-best-bridge-part-1-13VM9D2QVY7)
- [The Solution Architect Playbook - Part 2](https://viblo.asia/p/the-solution-architect-playbook-from-best-designer-to-best-bridge-part-2-PoL7e0Xa4vk)
- [The Solution Architect Playbook - Part 3](https://viblo.asia/p/the-solution-architect-playbook-from-best-designer-to-best-bridge-part-3-y0VGwO9DVPA)
