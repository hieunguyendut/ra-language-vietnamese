module.exports = {
    ra: {
        action: {
            delete: 'Xóa',
            show: 'Hiển thị',
            list: 'Danh sách',
            save: 'Lưu',
            create: 'Tạo mới',
            edit: 'Sửa',
            sort: 'Sắp xếp',
            cancel: 'Hủy bỏ',
            undo: 'Hoàn tác',
            refresh: 'Làm mới',
            add: 'Thêm',
            remove: 'Xóa bỏ',
            add_filter: 'Thêm bộ lọc',
            remove_filter: 'Bỏ bộ lọc',
            back: 'Trở về',
            bulk_actions: '%{smart_count} đã chọn',
        },
        boolean: {
            true: 'Có',
            false: 'Không',
        },
        page: {
            list: 'Danh sách %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Tạo %{name}',
            dashboard: 'Bảng điều khiển',
            not_found: 'Không tìm thấy',
            loading: 'Đang tải',
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
                  'Ít nhất một tài liệu tham khảo liên quan không còn tồn tại .',
                single_missing:
                  'Tài liệu tham khảo liên quan không còn tồn tại.',
            },
        },
        message: {
            yes: 'Có',
            no: 'Không',
            are_you_sure: 'Bạn có chắc chắn không?',
            about: 'Về',
            not_found:
              'Bạn đã nhập một URL sai hoặc bạn đã làm theo một liên kết không đúng.',
            loading: 'Trang web đang tải, vui lòng đợi trong giây lát',
            invalid_form: 'Dữ liệu nhập không đúng. Vui lòng kiểm tra lại',
            delete_title: 'Xóa %{name} #%{id}',
            delete_content: 'Bạn có chắc chắn muốn xóa vật phẩm này?',
            bulk_delete_title:
              'Xóa %{name} |||| Xóa %{smart_count} vật phẩm %{name}',
            bulk_delete_content:
              'Bạn có chắc chắn muốn xóa %{name} này? |||| Bạn có chắc chắn muốn xóa %{smart_count} vật phẩm này?',
        },
        navigation: {
            no_results: 'Không tìm thấy kết quả nào',
            no_more_results:
              'Trang số %{page} đã vượt giới hạn. Vui lòng trở lại trang trước.',
            page_out_of_boundaries: 'Trang số %{page} đã vượt giới hạn',
            page_out_from_end: 'Không thể đi tiếp sau trang cuối',
            page_out_from_begin: 'Không thể trở lại trước trang 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} của %{total}',
            next: 'Tiếp',
            prev: 'Trước',
        },
        auth: {
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
            canceled: 'Hủy bỏ hành động',
        },
        validation: {
            required: 'Bắt buộc',
            minLength: 'Phải Ít nhất %{min} ký tự',
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
