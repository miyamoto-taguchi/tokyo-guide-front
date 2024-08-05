import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const PASSWORD_REGEX =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/;

/**
 * ログインフォーム用カスタムフック
 * @return form フォームのバリデーションやメソッドを含んだ変数
 * @return onSubmit フォームを入力完了時の関数
 */
export const useLoginForm = () => {
  /**
   * フォームのスキーマ設定
   * ※バリデーションはここで設定
   */
  const formSchema = z.object({
    email: z.string().email("Invailed email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must be no more than 16 characters")
      .regex(
        PASSWORD_REGEX,
        "Password must include letters, numbers, and special characters"
      ),
  });

  /**
   * バリデーションや関数を含んだ変数
   */
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  /**
   * ログインする関数
   * @param values フォームの入力値
   */
  function onSubmit(values: z.infer<typeof formSchema>) {
    "use server";
    // ログイン処理　TODO：後で実装
    console.log(values);
  }

  return { form, onSubmit };
};
