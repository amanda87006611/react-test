import "./style/TaskTwo.css";

const TaskTwo = () => {
  return (
    <div className='container'>
      <h3>Task Two</h3>
      <div className='header'>5/8 外出確認表</div>
      <div className='content'>
        <ol className='shopList'>
          <li className='item'>麵包</li>
          <li className='item'>短袖衣服</li>
          <li className='item'>飲用水</li>
          <li className='item'>帳篷</li>
        </ol>
        <ul className='shopList'>
          <li className='item'>暈車藥</li>
          <li className='item'>感冒藥</li>
          <li className='item'>丹木斯</li>
          <li className='item'>咳嗽糖漿</li>
        </ul>
      </div>
      <div className='footer'>以上僅共參考</div>
    </div>
  );
};

export default TaskTwo;
