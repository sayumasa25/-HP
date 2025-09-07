export default function TestPage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>テストページ</h1>
      <p>このページが表示されれば、Next.jsは正常に動作しています。</p>
      <p>時刻: {new Date().toLocaleString()}</p>
    </div>
  );
}
