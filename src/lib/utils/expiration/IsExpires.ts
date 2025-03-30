import type { Writable } from 'svelte/store'

/**
 * 有効期限が現在時刻を超えているかを判定する関数
 *
 * @param expiresAt - 有効期限のタイムスタンプ（秒単位）
 * @param nowInJSTStore - 現在時刻（JST）を保持する Svelte の Writable ストア
 * @returns 有効期限切れの場合は true、それ以外は false
 *
 * @throws TypeError - 現在時刻が無効な場合
 */
export function IsExpires(expiresAt: number, nowInJSTStore: Writable<Date>): boolean {
    let nowInJST: number | undefined

    // ストアから現在時刻を取得
    // ストアの値（Date オブジェクト）を nowInJST に代入
    nowInJSTStore.subscribe((value) => {
        nowInJST = value
    })()

    // 現在時刻が取得できない場合はエラーをスロー
    if (!nowInJST) {
        throw new TypeError('Invalid date format for nowInJST')
    }

    // 現在時刻を秒単位のタイムスタンプに変換
    const nowInJSTAt = Math.floor(nowInJST.getTime() / 1000)

    // 有効期限が現在時刻を超えているかを判定
    // 有効期限が現在よりも前 = 有効期限切れ（true）
    return expiresAt < nowInJSTAt
}
