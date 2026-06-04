function formatField(id, value) {
  const stringValue = String(value);
  return `${id}${String(stringValue.length).padStart(2, "0")}${stringValue}`;
}

function crc16(payload) {
  let crc = 0xffff;

  for (let offset = 0; offset < payload.length; offset += 1) {
    crc ^= payload.charCodeAt(offset) << 8;

    for (let bitwise = 0; bitwise < 8; bitwise += 1) {
      if ((crc & 0x8000) !== 0) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc <<= 1;
      }

      crc &= 0xffff;
    }
  }

  return crc.toString(16).toUpperCase().padStart(4, "0");
}

export function buildPixPayload({ pixKey, receiverName, city, description, amount }) {
  const merchantAccount = [
    formatField("00", "BR.GOV.BCB.PIX"),
    formatField("01", pixKey),
    description ? formatField("02", description) : ""
  ].join("");

  const payload = [
    formatField("00", "01"),
    formatField("26", merchantAccount),
    formatField("52", "0000"),
    formatField("53", "986"),
    amount ? formatField("54", Number(amount).toFixed(2)) : "",
    formatField("58", "BR"),
    formatField("59", receiverName.slice(0, 25)),
    formatField("60", city.slice(0, 15)),
    formatField("62", formatField("05", "***")),
    "6304"
  ].join("");

  return `${payload}${crc16(payload)}`;
}
