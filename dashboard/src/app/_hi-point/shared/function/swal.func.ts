import Swal, { SweetAlertResult } from "sweetalert2";
export const swalDelete = (): Promise<SweetAlertResult<any>> => {
	return Swal.fire({
		icon: "question",
		title: "確定要刪除嗎?",
		showConfirmButton: true,
		confirmButtonText: "確認",
		showDenyButton: true,
		denyButtonText: "取消",
	});
};
