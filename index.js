

module.exports = {
    ra: {
        action: {
            add_filter: 'Thêm bộ lọc',
            add: 'Thêm',
            back: 'Trở về',
            bulk_actions: '%{smart_count} đã chọn',
            cancel: 'Hủy bỏ',
            clear_input_value: 'Xóa giá trị',
            clone: 'Nhân bản',
            confirm: 'Xác nhận',
            create: 'Tạo mới',
            delete: 'Xóa',
            edit: 'Sửa',
            export: 'Xuất',
            list: 'Danh sách',
            refresh: 'Làm mới',
            remove_filter: 'Bỏ bộ lọc',
            remove: 'Xóa bỏ',
            save: 'Lưu',
            search: 'Tìm kiếm',
            show: 'Hiển thị',
            sort: 'Sắp xếp',
            undo: 'Hoàn tác',
            unselect: 'Huỷ chọn',
            expand: 'Mở rộng',
            close: 'Đóng',
            open_menu: 'Mở menu',
            close_menu: 'Đóng menu',
        },
        boolean: {
            true: 'Có',
            false: 'Không',
            null: '',
        },
        page: {
            create: 'Tạo %{name}',
            dashboard: 'Bảng điều khiển',
            edit: '%{name} #%{id}',
            error: 'Đã xảy ra lỗi',
            list: 'Danh sách %{name}',
            loading: 'Đang tải',
            not_found: 'Không tìm thấy',
            show: '%{name} #%{id}',
            empty: 'Chưa có %{name} nào.',
            invite: 'Bạn có muốn tạo mới không?',
        },
        input: {
            file: {
                upload_several:
                    'Nhấp để chọn một tệp tin hoặc kéo thả nhiều tệp tin để tải lên.',
                upload_single: 'Nhấp để chọn một tệp tin hoặc kéo thả để tải lên.',
            },
            image: {
                upload_several:
                    'Nhấp để chọn một bức ảnh hoặc kéo thả nhiều bức ảnh để tải lên.',
                upload_single:
                    'Nhấp để chọn một bức ảnh hoặc kéo thả để tải lên.',
            },
            references: {
                all_missing: 'Không thể tìm thấy dữ liệu tham khảo.',
                many_missing:
                    'Ít nhất một tài liệu tham khảo liên quan không còn tồn tại.',
                single_missing:
                    'Tài liệu tham khảo liên quan không còn tồn tại.',
            },
            password: {
                toggle_visible: 'Ẩn mật khẩu',
                toggle_hidden: 'Hiện mật khẩu',
            },
        },
        message: {
            about: 'Về',
            are_you_sure: 'Bạn có chắc chắn không?',
            bulk_delete_content:
                'Bạn có chắc chắn muốn xóa %{name} này? |||| Bạn có chắc chắn muốn xóa %{smart_count} vật phẩm này?',
            bulk_delete_title:
                'Xóa %{name} |||| Xóa %{smart_count} vật phẩm %{name}',
            delete_content: 'Bạn có chắc chắn muốn xóa vật phẩm này?',
            delete_title: 'Xóa %{name} #%{id}',
            details: 'Chi tiết',
            error:
                'Đã xảy ra lỗi ở phía người dùng và yêu cầu của bạn không thể hoàn thành.',
            invalid_form: 'Dữ liệu nhập không đúng. Vui lòng kiểm tra lại',
            loading: 'Trang web đang tải, vui lòng đợi trong giây lát',
            no: 'Không',
            not_found:
                'Bạn đã nhập một URL sai hoặc bạn đã làm theo một liên kết không đúng.',
            yes: 'Có',
            unsaved_changes:
                "Một vài thay đổi của bạn chưa được lưu. Bạn có chắc là muốn bỏ qua chúng?",
        },
        navigation: {
            no_results: 'Không tìm thấy kết quả nào',
            no_more_results:
                'Trang số %{page} đã vượt giới hạn. Vui lòng trở lại trang trước.',
            page_out_of_boundaries: 'Trang số %{page} đã vượt giới hạn',
            page_out_from_end: 'Không thể đi tiếp sau trang cuối',
            page_out_from_begin: 'Không thể trở lại trước trang 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} của %{total}',
            page_rows_per_page: 'Số hàng trên mỗi trang:',
            next: 'Tiếp',
            prev: 'Trước',
        },
        auth: {
            auth_check_error: 'Vui lòng đăng nhập để tiếp tục',
            user_menu: 'Hồ sơ',
            username: 'Tên đăng nhập',
            password: 'Mật khẩu',
            sign_in: 'Đăng nhập',
            sign_in_error: 'Đăng nhập không thành công, vui lòng thử lại',
            logout: 'Đăng xuất',
        },
        notification: {
            updated: 'Cập nhật thành công |||| Cập nhật thành công %{smart_count} thành phần',
            created: 'Đã tạo thành công',
            deleted: 'Đã xóa thành công |||| Xóa thành công %{smart_count} thành phần',
            bad_item: 'Thành phần không đúng',
            item_doesnt_exist: 'Thành phần không tồn tại',
            http_error: 'Lỗi giao tiếp với máy chủ',
            data_provider_error:
                'Lỗi dataProvider. Kiểm tra console để biết chi tiết.',
            i18n_error:
                'Không thể tải bản dịch cho ngôn ngữ này',
            canceled: 'Hủy bỏ hành động',
            logged_out: 'Phiên làm việc của bạn đã kết thúc, vui lòng kết nối lại.'
        },
        validation: {
            required: 'Bắt buộc',
            minLength: 'Phải ít nhất %{min} ký tự',
            maxLength: 'Phải nhỏ hơn hoặc bằng %{max} ký tự',
            minValue: 'Phải lớn hơn hoặc bằng %{min}',
            maxValue: 'Phải nhỏ hơn hoặc bằng %{max}',
            number: 'Phải là số',
            email: 'Phải là địa chỉ email hợp lệ',
            oneOf: 'Phải chọn một trong số lựa chọn sau: %{options}',
            regex: 'Phải phù hợp với định dạng (regexp): %{pattern}',
        },
    },
};
