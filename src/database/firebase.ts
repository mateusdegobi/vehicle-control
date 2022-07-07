import firebase from '../backend/config';

export async function getRemoteList(ref: string): Promise<any[]> {
  const list: any[] = [];
  await firebase
    .database()
    .ref(ref)
    .once("value", (snap) => {
      snap.forEach((child) => {
        list.push(child.val());
      });
    });
  return list;
}
export async function getRemoteItem(ref: string): Promise<any> {
  let item: any;
  await firebase
    .database()
    .ref(ref)
    .once("value", (snap) => {
      item = snap.val();
    });
  return item;
}
